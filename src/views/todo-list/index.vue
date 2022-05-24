<template>
  <div class="todo-list">
    <todo-header @add="add" />
    <undo-list :list="undoList" @onDelete="onDelete" />
  </div>
</template>

<script>
import TodoHeader from './components/todo-header.vue'
import UndoList from './components/undo-list.vue'

export default {
  name: 'todoList',

  components: {
    'todo-header': TodoHeader,
    'undo-list': UndoList
  },

  data () {
    return {
      undoList: []
    }
  },

  methods: {
    add (value) {
      this.undoList.push(value)
    },
    onDelete (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="less">
</style>
