<template>
  <div class="users-table">
    <UsersTableHeader />
    
    <div class="users-table__body">
      <template v-for="user of users">
        <UserRow
          :key="user.id"
          :user="user"
        />
        <template v-if="user.subordinates.length > 0">
          <UserRow
            v-for="sub of user.subordinates"
            :key="sub.id"
            :user="sub"
          />
        </template>
      </template>
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
    sortByName() {
      this.users.sort((a, b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
      })
    },
    sortByPhone() {
      this.users.sort((a, b) => {
        if(a.phone < b.phone) return -1
        if(a.phone > b.phone) return 1
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
.subcell {
  flex-basis: 40%;
}
.users-table__cell:last-child {
  border-left: none;
}
</style>