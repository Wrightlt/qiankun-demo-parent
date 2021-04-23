import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home'
// import Login from '@/views/Login'
Vue.use(VueRouter);

const routes = [
  {
    path: '/portal/*',
    name: 'Portal',
    component: () => import('../views/Portal.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // component: import(/* webpackChunkName: "Login" */ "../views/Login.vue")
    // component: Login
    component: () => import('../views/Login.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
