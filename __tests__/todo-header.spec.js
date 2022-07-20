import { shallowMount } from '@vue/test-utils'
import TodoHeader from '../src/views/todo-list/components/todo-header.vue'

it('header 包含 input', () => {
  const wrapper = shallowMount(TodoHeader)
  const input = wrapper.find('input[type="text"]')
  expect(input.exists()).toBeTruthy()
})

it('header 中 input 初始值为空', () => {
  const wrapper = shallowMount(TodoHeader)
  const inputValue = wrapper.vm.value
  expect(inputValue).toBe('')
})

it('header 中 input 发生变化数据也发生变化', () => {
  const wrapper = shallowMount(TodoHeader)
  const input = wrapper.find('input[type="text"]')
  input.setValue('new text')
  expect(wrapper.vm.value).toBe('new text')
})

it('header 中 input 回车，无内容时无反应', () => {
  const wrapper = shallowMount(TodoHeader)
  const input = wrapper.find('input[type="text"]')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

it('header 中 input 回车，有内容则向外派发 add 事件，且清空 input', () => {
  const wrapper = shallowMount(TodoHeader)
  const input = wrapper.find('input[type="text"]')
  input.setValue('text')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.value).toBe('')
})

it('header 样式改变做提示', () => {
  const wrapper = shallowMount(TodoHeader)
  expect(wrapper).toMatchSnapshot()
})
