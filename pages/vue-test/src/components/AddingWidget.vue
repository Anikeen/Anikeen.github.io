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
        <input class="adding-form__input" id="name" type="text" v-model="name">
      </div>

      <div class="adding-form__row">
        <label class="adding-form__label" for="phone">Телефон</label>
        <input class="adding-form__input" id="phone" type="text" v-model="phone">
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
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'AddingWidget',
  data() {
    return {
      users: [],
      name: null,
      phone: null,
      chiefId: null
    }
  },
  methods: {
    ...mapMutations(['addUser']),
    ...mapActions(['storeUsers']),
    widgetToggle() {
      this.$parent.widgetToggle()
    },
    submitHandler() {
      if (!this.name || !this.phone) return

      const newUser = {
        id: (new Date().valueOf()).toString().slice(11),
        name: this.name,
        phone: this.phone,
        chiefId: this.chiefId,
        subordinates: []
      }
      
      this.addUser(newUser)
      this.storeUsers()
      
      this.name = null
      this.phone = null
      this.chief = null
    }
  },
  mounted() {
    this.users = this.$store.getters.users
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
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .adding-form__input,
  .adding-form__select {
    flex-basis: 70%;
    padding: 5px;
    font-size: 18px;
    color: #666;
  }
</style>