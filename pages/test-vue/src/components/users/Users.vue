<template>
  <div class="users-table">
    <UsersTableHeader />
    
    <div class="users-table__body">
      <UserRow
        v-for="user of users"
        :key="user.id"
        :user="user"
      />    
    </div>
  </div>
</template>

<script>
import UsersTableHeader from './UsersTableHeader'
import UserRow from './UserRow'

export default {
  name: 'Users',
  components: { UsersTableHeader, UserRow },
  props: ['users'],
  methods: {    
    sortList(key) {
      this.sortSingleList(this.users, key)
      this.recursiveTraversal(this.users, key)
      this.$parent.storeUsers()
    },
    recursiveTraversal(list, key) {
      for (let user of list) {
        if (user.subordinates.length > 0) {
          this.sortSingleList(user.subordinates, key)
          this.recursiveTraversal(user.subordinates, key)
        }
      }
    },
    sortSingleList(list, key) {
      list.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
      })
    }
  }
}
</script>

<style>
.users-table {
  width: 100%;
  margin-top: 20px;
  text-align: left;
}
.users-table__body {
  display: flex;
  flex-direction: column;
}
.user-table__node {
}
.users-table__row {
  flex-basis: 100%;
  display: flex;
  justify-content: flex-end;
}
.users-table__row:last-child {
  border-bottom: none;
}
.users-table__cell {
  flex-basis: 50%;
  padding: 20px;
  font-weight: normal;
  border: 1px solid #666;
}
.subrow {
  margin-left: 40px;
}
.phone-col {
  flex-basis: 245px;
  min-width: 245px;
}
.users-table__cell:last-child {
  border-left: none;
}
</style>