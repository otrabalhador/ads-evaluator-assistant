import Vuex from 'vuex'
import Vue from 'vue'
import VueClipboard from 'vue-clipboards'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
Vue.use(VueClipboard)

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
