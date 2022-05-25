import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: ''
  },
  mutations: {
    setInputValue (state, payload) {
      state.inputValue = payload
    }
  }
})
