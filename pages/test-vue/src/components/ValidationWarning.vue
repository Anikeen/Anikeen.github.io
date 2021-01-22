<template>
  <span class="adding-form__warning">{{message}}</span>
</template>

<script>
export default {
  name: 'ValidationWarning',
  props: ['message']
}
</script>