import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    category: ''
  },
  mutations: {
    getCategoryList(state, msg) {
      state.category = msg
    }
  },
  getters: {
    updateCategory: state => state.category
  }
})

export default store
