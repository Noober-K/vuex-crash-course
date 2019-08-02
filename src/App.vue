<template>
  <div id="app">
    <AddTodo/>
    <Todos/>
  </div>
</template>

<script>
import store from './store'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  store,
  components: {
    AddTodo,
    Todos
  }
}
</script>

<style>
body{
  background-color: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 1100px;
  margin: 60px auto;
}
h3{
  padding: 10px;
  margin: 0;
}
</style>
