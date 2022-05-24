import { shallowMount } from '@vue/test-utils'
import TodoList from '../../index.vue'
import TodoHeader from '../../components/todo-header.vue'
import UndoList from '../../components/undo-list.vue'

it('todo-list 组件初始化，undoList 为空数组', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.undoList
  expect(undoList).toEqual([])
})

it('todo-list 组件执行 addItem，会增加内容', () => {
  const wrapper = shallowMount(TodoList)
  const todoHeader = wrapper.findComponent(TodoHeader)
  todoHeader.vm.$emit('add', 'test1')
  expect(wrapper.vm.undoList).toEqual(['test1'])
})

it('todo-list 调用 undo-list，应该传递 list 参数', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.findComponent(UndoList)
  // undoList 接受的 props 中有 list 属性
  expect(undoList.props('list')).toBeTruthy()
})

it('todo-list 中 onDelete 被触发，undoList 内容减 1', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.onDelete(0)
  expect(wrapper.vm.undoList).toEqual([2, 3])
})
