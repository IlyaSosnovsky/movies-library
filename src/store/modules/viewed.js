import * as types from '../mutation-types'

const state = {
  isEmpty: true,
  isLoding: false,
  isLoadedSuccess: false,
  isLoadFailed: false,
  viewed: []
}

const getters = {
  getHeaderState: state => state
}

const mutations = {
  [types.TRIGGER_LOAD_ANIMATION] (state) {
    state.showLoading = !state.loadFailed
  }
}

const actions = {
  triggerLoadAnimation ({ commit }) {
    commit(types.TRIGGER_LOAD_ANIMATION)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
