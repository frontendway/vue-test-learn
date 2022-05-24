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
  todoHeader.vm.$emit('add', {
    value: 'test1',
    status: 'div'
  })
  expect(wrapper.vm.undoList).toEqual([
    {
      value: 'test1',
      status: 'div'
    }
  ])
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
    undoList: [
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' }
    ]
  })
  wrapper.vm.onDelete(0)
  expect(wrapper.vm.undoList).toEqual([
    { value: 2, status: 'div' },
    { value: 3, status: 'div' }
  ])
})

it('todo-list 中 onToggleStatus 被触发，切换 status 状态', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [
      { value: 1, status: 'div' }
    ]
  })
  wrapper.vm.onToggleStatus('input', 0)
  expect(wrapper.vm.undoList).toEqual([
    { value: 1, status: 'input' }
  ])
})

it('todo-list 中 onChangeValue 被触发，当前项目的 value 值也发生变化', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [
      { value: '1', status: 'div' }
    ]
  })
  wrapper.vm.onChangeValue('11', 0)
  expect(wrapper.vm.undoList).toEqual([
    { value: '11', status: 'div' }
  ])
})
