import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Signup from '../views/signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component : Login,
  },
  {
    path : '/signup',
    name : 'signup',
    component: Signup,
  }
]

const router = new VueRouter({
  routes
})

export default router
