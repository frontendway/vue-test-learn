import { mount } from '@vue/test-utils'
import TodoList from '../../index.vue'
import store from '../../../../store.js'

const p = Promise.resolve()
const nextTick = (fn) => p.then(fn)

it(`
  1. 用户在 header 中输入内容
  2. 回车
  3. 列表中增加用户输入内容
`, async () => {
  const wrapper = mount(TodoList, { store })
  const inputElm = wrapper.find('[data-test="header"]')
  inputElm.setValue('123')
  inputElm.trigger('keyup.enter')

  await nextTick(() => {
    const items = wrapper.findAll('.item')
    expect(items.length).toBe(1)
    expect(items.at(0).text()).toContain('123  删除')
  })
})
