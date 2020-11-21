import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  profileData: []
}

const getters = {}

const actions = {
  getUser ({ commit }) {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
      .then(response => {
        console.log(response)
        commit('SET_USER_DATA', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

const mutations = {
  SET_USER_DATA (state, data) {
    state.profileData = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
