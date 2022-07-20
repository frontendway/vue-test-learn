<template>
  <div class="todo-list">
    <todo-header @add="add" />
    <ul>
      <li v-for="item in undoList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import TodoHeader from './components/todo-header.vue'

export default {
  name: 'todoList',

  components: {
    'todo-header': TodoHeader
  },

  data () {
    return {
      undoList: []
    }
  },

  methods: {
    add (value) {
      this.undoList.push(value)
    }
  }
}
</script>
