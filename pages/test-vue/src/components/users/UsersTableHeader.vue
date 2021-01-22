<template>
  <div class="users-table__header">
    <div class="users-table__row">
      <div class="users-table__cell" @click="sortList('name')">Имя</div>
      <div class="users-table__cell phone-col" @click="sortList('phone')">Телефон</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersTableHeader',
  methods: {
    sortList(key) {
      this.$parent.sortList(key)
    }
  }
}
</script>

<style>
.users-table__header {
  cursor: pointer;
}
</style>