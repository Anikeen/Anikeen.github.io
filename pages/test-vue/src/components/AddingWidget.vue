<template>
  <div class="adding-widget">
    <div class="adding-widget__header">
      <h2 class="adding-widget__title">Добавление пользователя</h2>
      <button
        class="adding-widget__btn"
        type="button"
        @click="widgetToggle"
      >
        &times;
      </button>
    </div>

    <form class="adding-form" @submit.prevent="submitHandler">
      <div class="adding-form__row">
        <label class="adding-form__label" for="name">Имя</label>
        <input
          class="adding-form__input"
          :class="{invalid: isNameEmpty || hasNameMinLength || !isLiteral}"
          id="name"
          type="text"
          v-model.trim="name"
        >
        <ValidationWarning
          v-if="isNameEmpty"
          :message="'Вы не указали имя'"
        />
        <ValidationWarning
          v-else-if="hasNameMinLength"
          :message="'Минимальная длина имени 2 символа'"
        />
        <ValidationWarning
          v-else-if="!isLiteral"
          :message="'Имя должно состоять из букв'"
        />
      </div>

      <div class="adding-form__row">
        <label class="adding-form__label" for="phone">Телефон</label>
        <input
          class="adding-form__input"
          :class="{invalid: isPhoneEmpty || hasPhoneMinLength}"
          id="phone"
          type="text"
          v-model.trim="phone" 
          v-imask="mask"
          @accept="onAccept"
        >
        <ValidationWarning
          v-if="isPhoneEmpty"
          :message="'Вы не указали телефон'"
        />  
        <ValidationWarning
          v-if="hasPhoneMinLength"
          :message="'Вы не указали телефон'"
        />       
      </div>

      <div class="adding-form__row">
        <label class="adding-form__label"  for="chief">Начальник</label>
        <select class="adding-form__select" id="chief" v-model="chiefId">
          <option value=""></option>
          <option
            v-for="user of users"
            :key="user.id"
            :value="user.id"
          >
            {{user.name}}
          </option>
        </select>
      </div>

      <button class="just-btn" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { literal } from '@/modules/validation'
import WarningsMixin from '@/mixins/adding-form-warnings.mixin'
import ValidationWarning from './ValidationWarning'
import { IMaskDirective } from 'vue-imask';

export default {
  name: 'AddingWidget',
  components: { ValidationWarning },
  mixins: [ WarningsMixin ],
  directives: {
    imask: IMaskDirective
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      literal
    },
    phone: {
      required,
      minLength: minLength(11)
    }
  },
  data() {
    return {
      name: null,
      phone: null,
      chiefId: null,
      mask: {
        mask: '+{7}(000)000-00-00', 
        lazy: false
      }   
    }
  },
  computed: {
    users() {     
      const storagedUsers = this.$parent.users
      let extractedUsers = []
      this.extractUsers(storagedUsers, extractedUsers)
      return extractedUsers
    }    
  },
  methods: {
    extractUsers(storagedUsers, extractedUsers) {
      for (let user of storagedUsers) {
        extractedUsers.push(user)
        if (user.subordinates.length > 0) {
          this.extractUsers(user.subordinates, extractedUsers)
        }
      }
    },
    widgetToggle() {
      this.$parent.widgetToggle()
    },
    submitHandler() {
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      
      const newUser = {
        id: (new Date().valueOf()).toString().slice(10),
        name: this.name,
        phone: this.phone,
        chiefId: this.chiefId,
        subordinates: []
      }
      
      this.$parent.addUser(newUser)
      this.$parent.storeUsers()
      
      this.name = null
      this.phone = null
      this.chiefId = null

      this.$v.$reset()
    },  
    onAccept(e) {
      const maskRef = e.detail
      this.phone = maskRef.unmaskedValue
    }
  }
}
</script>

<style>
  .adding-widget {
    flex-basis: 40%;
    margin-top: 65px;
    margin-left: 65px;
    padding: 20px;
    border: 1px solid #666;
  }
  .adding-widget__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .adding-widget__title {
    font-weight: normal;
    font-size: 18px;
  }
  .adding-widget__btn {
    font-size: 24px;
    font-weight: 600;
    color: #666;
  }
  .adding-form__row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .adding-form__label {
    flex-basis: 30%;
  }
  .adding-form__input,
  .adding-form__select {
    flex-basis: 70%;
    padding: 5px;
    font-size: 18px;
    color: #666;
    border: 1px solid #333;
    border-radius: 5px;
  }
  .adding-form__input:focus,
  .adding-form__select:focus {
    border-color: blue;
  }
  .adding-form__input.invalid {
    border-color: red;
  }
  .adding-form__warning {
    display: block;
    flex-basis: 70%;
    align-self: flex-end;
    margin-top: 10px;
    font-size: 12px;
    color: red;
  }
</style>