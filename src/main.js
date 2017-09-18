// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueClipboard from 'vue-clipboards'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import router from './router'
import store from './store'

Vue.use(VueClipboard)
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'green',
  accent: 'green',
  warn: 'red',
  background: 'white'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
