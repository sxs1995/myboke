import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import '@/common/css/reset.css'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(iView)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
