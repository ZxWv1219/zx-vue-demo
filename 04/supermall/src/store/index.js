import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  homeTabControlIndex: 0,
  homeTabControlY: {
    pop: 0,
    new: 0,
    sell: 0
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store