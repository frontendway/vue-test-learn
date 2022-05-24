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
      list: [1, 2, 3]
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
