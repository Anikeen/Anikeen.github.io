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

export default {
  name: 'Contacts',
  components: { Users, AddingWidget },
  data() {
    return {
      users: [],
      WidgetIsOpen: false
    }
  },
  methods: {
    fetchUsers() {
      const storagedUsers = localStorage.users
      let users = []
  
      if (storagedUsers) {
        users = JSON.parse(storagedUsers)
      }      
      this.users = users
    },
    addUser(user) {   
      if (user.chiefId) {
        this.addToChief(this.users, user)
      } else {
        this.users.push(user)
      }
    },
    storeUsers() {
      const serializedUsers = JSON.stringify(this.users)
      localStorage.users = serializedUsers
    },
    addToChief(users, newUser) {
      users.forEach(user => {
        if (user.id == newUser.chiefId) {
          user.subordinates.push(newUser)
          return
        } else {
          this.addToChief(user.subordinates, newUser)
        }
      })
    },
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

