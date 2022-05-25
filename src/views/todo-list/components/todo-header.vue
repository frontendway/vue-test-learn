<template>
  <header class="todo-header">
    <input type="text" @keyup.enter="addItem($event)" data-test="header" :value="inputValue">
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'todo-header',

  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
  },

  methods: {
    addItem (ev) {
      const value = ev.target.value.trim()
      if (value) {
        this.$emit('add', {
          value: value,
          status: 'div'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.todo-header{
  height: 60px;
  line-height: 60px;
  background: #ccc;
  width: 600px;
  margin: 0px auto;
  input[type="text"]{
    float: right;
  }
}
</style>
