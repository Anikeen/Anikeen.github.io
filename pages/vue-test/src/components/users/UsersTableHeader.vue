<template>
  <div class="users-table__header">
    <div class="users-table__row">
      <div class="users-table__cell" @click="sortByName">Имя</div>
      <div class="users-table__cell" @click="sortByPhone">Телефон</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersTableHeader',
  methods: {
    sortByName() {
      this.$parent.sortByName()
    },
    sortByPhone() {
      this.$parent.sortByPhone()
    }
  }
}
</script>

<style>
.users-table__header {
  border-bottom: 1px solid #666;
  cursor: pointer;
}
</style>