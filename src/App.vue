<template>
  <div id="app">
    <todo-list />
  </div>
</template>

<script>
import TodoList from './views/todo-list/index.vue'

export default {
  name: 'App',
  components: {
    'todo-list': TodoList
  }
}
</script>

<style lang="less">
html,body{
  margin: 0px;
}
</style>
