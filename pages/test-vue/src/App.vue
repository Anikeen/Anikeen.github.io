<template>
  <div id="app">
    <Contacts />
  </div>
</template>

<script>
import Contacts from './components/Contacts'

export default {
  name: 'App',
  components: {
    Contacts
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
button {
  background-color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
}
input,
select {
  outline: none;
}
.just-btn {
  padding: 10px 20px;
  font-size: 18px;
  color: #666;
  background-color: #ddd;
  border: 2px solid #aaa;
  border-radius: 20px;
  transition: background-color .4s;
}
.just-btn:hover {
  background-color: #ccc;
}
</style>
