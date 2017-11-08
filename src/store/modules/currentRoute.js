import * as types from '../mutation-types'

const state = {
  currentRoute: '/'
}

const getters = {
  getCurrentRoute: state => state.currentRoute
}

const actions = {
  setCurrentRoute ({ commit }, route) {
    commit(types.SET_CURRENT_ROUTE, route)
  }
}

const mutations = {
  [types.SET_CURRENT_ROUTE] (state, route) {
    state.currentRoute = route
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
