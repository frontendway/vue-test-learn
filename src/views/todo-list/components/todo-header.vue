<template>
  <header class="todo-header">
    <input type="text" @keyup.enter="addItem" data-test="input" v-model="value">
  </header>
</template>

<script>
export default {
  name: 'todo-header',

  data () {
    return {
      value: ''
    }
  },

  methods: {
    addItem () {
      if (this.value.trim()) {
        this.$emit('add', {
          value: this.value,
          status: 'div'
        })
        this.value = ''
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
