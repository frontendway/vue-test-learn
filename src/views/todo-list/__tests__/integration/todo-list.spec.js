import { mount } from '@vue/test-utils'
import TodoList from '../../index.vue'
import store from '../../../../store.js'

beforeEach(() => {
  // 用 jest 模拟原生的延时函数，让延时函数立即执行无需等待
  // jest.useFakeTimers()
})

const p = Promise.resolve()
const nextTick = (fn) => p.then(fn)

it('用户进入页面发起请求，列表展示接口数据', (done) => {
  const wrapper = mount(TodoList, { store })

  setTimeout(() => {
    const items = wrapper.findAll('.item')
    expect(items.length).toBe(2)
    expect(items.at(0).text()).toContain('删除')
    done()
  })
})

it(`
  1. 进入页面发起请求
  2. 输入内容回车
  3. 在接口返回的数据中增加 1 条数据
`, (done) => {
  const wrapper = mount(TodoList, { store })

  setTimeout(async () => {
    await nextTick(() => {
      const inputElm = wrapper.find('[data-test="header"]')
      inputElm.setValue('123')
      inputElm.trigger('keyup.enter')
    })
    await nextTick(() => {
      const itemAll = wrapper.findAll('.item')
      expect(itemAll.length).toBe(3)
    })
    done()
  })
})

// it(`
//   1. 用户进入页面 5s 后发起请求
//   2. 渲染接口数据
// `, async () => {
//   const wrapper = mount(TodoList, { store })

//   // 让 TodoList 组件中的延时函数立即执行，需搭配 jest.useFakeTimers()
//   jest.runAllTimers()

//   await nextTick(() => {
//     const itemAll = wrapper.findAll('.item')
//     expect(itemAll.length).toBe(2)
//   })
// })
