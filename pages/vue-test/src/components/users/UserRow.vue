<template>
  <div class="users-table__row">
    <div class="users-table__cell" :class="isSubcell">
      <button
        v-if="hasSubordinates || hasChief"
        class="users-table__button"
      >
        +
      </button>
      {{user.name}}
    </div>
    <div class="users-table__cell">{{user.phone}}</div>    
  </div>  
</template>

<script>
export default {
  name: 'UserRow',
  props: ['user'],
  computed: {
    hasSubordinates() {
      return this.user.subordinates.length > 0 ? true : false
    },
    hasChief() {
      return this.user.chiefId ? true : false
    },
    isSubcell() {
      return this.user.chiefId ? 'subcell' : ''
    }
  }
}
</script>

<style>
.users-table__button {
  position: relative;
  left: -10px;
  padding: 0 5px;
}
</style>