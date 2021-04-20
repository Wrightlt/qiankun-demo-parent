import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
