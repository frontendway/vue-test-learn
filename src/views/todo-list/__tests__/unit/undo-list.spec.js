import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/undo-list.vue'

it('undo-list 为空数组，count 为 0，列表无内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  })
  const countElm = wrapper.find('.count')
  expect(countElm.text()).toBe('0')
  const listElm = wrapper.findAll('.item')
  expect(listElm.length).toBe(0)
})

it('undo-list 数组为 [1, 2, 3]，count 为 3，列表有内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    }
  })
  const countElm = wrapper.find('.count')
  expect(countElm.text()).toBe('3')
  const listElm = wrapper.findAll('.item')
  expect(listElm.length).toBe(3)
  const deleteElms = wrapper.findAll('.delete')
  deleteElms.at(0).trigger('click')
  expect(wrapper.emitted().onDelete).toBeTruthy()
  // emit 派发的值是 0
  expect(wrapper.emitted().onDelete[0][0]).toBe(0)
})

it('undo-list 数组为 [{ value: 1, status: "div" }]，点击 item 项，向外派发 onToggleStatus 事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { value: 1, status: 'div' }
      ]
    }
  })
  const listElm = wrapper.findAll('.item')
  listElm.at(0).trigger('click')
  expect(wrapper.emitted().onToggleStatus).toBeTruthy()
  // emit 派发的值是 0
  expect(wrapper.emitted().onToggleStatus[0][0]).toBe('input')
  expect(wrapper.emitted().onToggleStatus[0][1]).toBe(0)
})

it('undo-list 中 onChangeValue 被触发，向外派发 onChangeValue 事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { value: '1', status: 'div' }
      ]
    }
  })
  const inputElm = wrapper.find('.input')
  // inputElm.setValue('11')
  inputElm.element.value = '11'
  inputElm.trigger('input')
  expect(wrapper.emitted().onChangeValue).toBeTruthy()
  expect(wrapper.emitted().onChangeValue[0][0]).toBe('11')
  expect(wrapper.emitted().onChangeValue[0][1]).toBe(0)
})
