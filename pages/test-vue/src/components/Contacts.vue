<template>
  <div class="contacts">  
    <div class="users-list">
      <button
        class="just-btn"
        @click="widgetToggle"
      >
        Добавить
      </button>

      <Users
        v-if="users.length > 0"
        :users="users"
      />

      <p
        v-else
        class="warning"
      >
        Нет добавленных пользователей
      </p>
    </div>

    <AddingWidget v-if="WidgetIsOpen" />
  </div>
</template>

<script>
import Users from './users/Users'
import AddingWidget from './AddingWidget'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Contacts',
  components: {Users, AddingWidget},
  data() {
    return {
      WidgetIsOpen: false
    }
  },
  computed: mapGetters(['users']),
  methods: {
    ...mapActions(['fetchUsers']),
    widgetToggle() {
      this.WidgetIsOpen = !this.WidgetIsOpen
    }
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>

<style>
.contacts {
  display: flex;
  align-items: flex-start;
  margin: 60px;
}
.users-list {
  text-align: right;
  flex-basis: 40%;
}
.warning {
  margin-top: 20px;
}
</style>

