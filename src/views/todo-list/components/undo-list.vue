<template>
  <div>
    <ul>
      <li class="item" v-for="(item, index) in list" :key="item">
        {{ item }}
        <span class="delete" @click="onDelete(index)">删除</span>
      </li>
    </ul>
    <span class="count">{{ list.length }}</span>
  </div>
</template>

<script>
export default {
  name: 'undo-list',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
    }
  },

  methods: {
    onDelete (index) {
      this.$emit('onDelete', index)
    }
  }
}
</script>

<style scoped lang="less">

</style>
