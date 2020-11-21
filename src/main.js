import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Header from './components/Header'
import Browse from './components/Browse'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login},
  {path: '/Main', component: Header},
  {path: '/Browse', component: Browse}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
