// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

window.popStateDetected = false
window.addEventListener('popstate', () => {
  window.popStateDetected = true
})

router.beforeEach((to, from, next) => {
  const IsItABackButton = window.popStateDetected
  window.popStateDetected = false
  if (IsItABackButton && from.meta.someLogica) {
    next(false)
    return ''
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
