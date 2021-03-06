import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
  {
    path: '/portal/*',
    name: 'Portal',
    component: () => import('../views/Portal.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
