import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Login from './views/Login'
import Browse from './views/home/Browse'
import Posts from './views/home/Posts'
import Home from './views/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

const routes = [
  {path: '/', component: Login},
  {
    path: '/home/:id',
    component: Home,
    children: [
      {
        path: 'posts',
        component: Posts
      },
      {
        path: 'browse',
        component: Browse
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
