import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  profileData: [],
  posts: [],
  profiles: []
}

const getters = {}

const actions = {
  getUser ({commit}) {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
      .then(response => {
        console.log(response)
        commit('SET_USER_DATA', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getPosts ({commit}) {
    axios.get('https://private-anon-01a41ea7a6-wad20postit.apiary-mock.com/posts')
      .then(response => {
        console.log(response)
        commit('SET_POSTS', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getProfiles ({commit}) {
    axios.get('https://private-anon-55b9e17f14-wad20postit.apiary-mock.com/profiles')
      .then(response => {
        console.log(response)
        commit('SET_PROFILES', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

const mutations = {
  SET_USER_DATA (state, data) {
    state.profileData = data
  },
  SET_POSTS (state, data) {
    state.posts = data
  },
  SET_PROFILES (state, data) {
    state.profiles = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
