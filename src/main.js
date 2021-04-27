import Vue from "vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from "./App.vue"
import store from "./store"
import router from "./router"
import actions from './qiankunConfig/globalState'

// 导入qiankun内置函数
import {
    registerMicroApps, // 注册子应用
    // runAfterFirstMounted, // 第一个子应用装载完毕
    // setDefaultMountApp, // 设置默认装载子应用
    start, // 启动
} from "qiankun"

// let app = null
Vue.use(ElementUI)

Vue.config.productionTip = false

// let msg = {
//     data: {
//         auth: false,
//     },
//     fns: [
//         function LOGOUT_(data) {
//             alert('父应用返回信息：' + data)
//         }]
//     }

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

/**
 * 渲染函数
 * appContent 子应用html
 * loading 如果主应用设置loading效果，可不要
 */
// function render({ appContent, loading } = {}) {
//     if (!app) {
//         app = new Vue({
//             el: "#parentContainer",
//             router,
//             // store,
//             data() {
//                 return {
//                     content: appContent,
//                     loading,
//                 }
//             },
//             render(h) {
//                 return h(App, {
//                     props: {
//                         content: this.content,
//                         loading: this.loading,
//                     },
//                 })
//             }
//         })
//     } else {
//         app.content = appContent
//         app.loading = loading
//     }
// }

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
// function genActiveRule(routerPrefix) {
//     return (location) => location.pathname.startsWith(routerPrefix)
// }

// 调用渲染主应用
// render()

// 注册子应用
registerMicroApps([
    { 
      name: 'vue-aaa', 
      entry: 'http://localhost:7771', 
      container: '#appContainer', 
      activeRule: '/portal/aaa', 
      props: actions
    },
    { 
      name: 'vue-bbb',
      entry: 'http://localhost:7772', 
      container: '#appContainer', 
      activeRule: '/portal/bbb',
      props: actions
    },
  ]);
// registerMicroApps(
//     [
//         {
//             // name: "vue-aaa",
//             entry: "//localhost:7771",
//             // render,
//             container: '#appContainer',
//             // activeRule: genActiveRule("/portal/aaa"),
//             activeRule: '/portal/aaa',
//             props: msg // 将定义好的数据传递给子应用
//         },
//         {
//             name: "vue-bbb",
//             entry: "//localhost:7772",
//             // render,
//             container: '#appContainer',
//             // activeRule: genActiveRule("/portal/bbb"),
//             activeRule: '/portal/bbb',
//             props: msg // 将定义好的数据传递给子应用
//         }
//     ],
//     // {
//     //     beforeLoad: [
//     //         (app) => {
//     //             console.log("before load", app)
//     //         },
//     //     ], // 挂载前回调
//     //     beforeMount: [
//     //         (app) => {
//     //             console.log("before mount", app)
//     //         },
//     //     ], // 挂载后回调
//     //     afterUnmount: [
//     //         (app) => {
//     //             console.log("after unload", app)
//     //         },
//     //     ] // 卸载后回调
//     // }
// )

// 设置默认子应用,参数与注册子应用时genActiveRule("/aaa")函数内的参数一致
// setDefaultMountApp("/aaa")

// 第一个子应用加载完毕回调
// runAfterFirstMounted(() => { })

// 启动微服务
start()
