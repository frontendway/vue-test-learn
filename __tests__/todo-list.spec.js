import { shallowMount } from '@vue/test-utils'
import TodoList from '../src/views/todo-list/index'
import TodoHeader from '../src/views/todo-list/components/todo-header'

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
