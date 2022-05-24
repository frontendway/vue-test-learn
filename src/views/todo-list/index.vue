<template>
  <div class="todo-list">
    <todo-header @add="add" />
    <undo-list
      :list="undoList"
      @onDelete="onDelete"
      @onToggleStatus="onToggleStatus"
      @onChangeValue="onChangeValue"
    />
  </div>
</template>

<script>
import TodoHeader from './components/todo-header.vue'
import UndoList from './components/undo-list.vue'

export default {
  name: 'todoList',

  components: {
    TodoHeader,
    UndoList
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
    },
    onToggleStatus (status, index) {
      this.undoList[index].status = status
    },
    onChangeValue (value, index) {
      this.undoList[index].value = value
    }
  }
}
</script>

<style scoped lang="less">
</style>
