<template>
  <div class="user-table__node" :class="isSubRow" >
    <div class="users-table__row">
      <div class="users-table__cell">
        <button
          v-if="hasSubordinates"
          class="users-table__button"
          @click="toggleList"
        >
          +
        </button>

        {{user.name}}
      </div>

      <div class="users-table__cell phone-col">{{maskedPhone}}</div>   
    </div>

    <template v-if="hasSubordinates">
      <UserRow
        v-for="user of user.subordinates" 
        :user="user"
        :key="user.id"
        v-show="isOpen"
      /> 
    </template>
  </div>
</template>

<script>
export default {
  name: 'UserRow',
  props: ['user'],
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    hasSubordinates() {
      return this.user.subordinates.length > 0 ? true : false
    },
    hasChief() {
      return this.user.chiefId ? true : false
    },
    isSubRow() {
      return this.user.chiefId ? 'subrow' : ''
    },
    maskedPhone() {
      return `+7(${this.user.phone[1]}${this.user.phone[2]}${this.user.phone[3]})-${this.user.phone[4]}${this.user.phone[5]}${this.user.phone[6]}-${this.user.phone[7]}${this.user.phone[8]}-${this.user.phone[9]}${this.user.phone[10]}`
    }
  },
  methods: {
    toggleList() {
      this.isOpen = !this.isOpen
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