<template>
  <div>
    <ul>
      <li
        class="item"
        :key="index"
        @click="toggleStatus(item, index)"
        v-for="(item, index) in list"
      >
        <div v-show="item.status === 'div'">{{ item.value }}</div>
        <input @click.stop="() => {}" v-show="item.status === 'input'" type="text" class="input" :value="item.value" @input="onChangeValue($event, index)">
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

  methods: {
    onDelete (index) {
      this.$emit('onDelete', index)
    },
    toggleStatus (item, index) {
      const status = item.status
      this.$emit('onToggleStatus', status === 'div' ? 'input' : 'div', index)
    },
    onChangeValue (ev, index) {
      this.$emit('onChangeValue', ev.target.value, index)
    }
  }
}
</script>
