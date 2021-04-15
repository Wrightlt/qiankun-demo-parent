<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>tete test</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <!-- 父应用渲染用 -->
    <router-view></router-view>

    <!-- 子应用盒子 -->
    <div id="root-view" class="app-view-box" v-html="content"></div>
        
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  props: {
    loading: Boolean,
    content: String 
  },
  beforeCreate() {
    console.log('parent beforeCreate')
  },
  created() {
    console.log('parent created')
  },
  mounted() {
    console.log('parent mounted')
  },
  unmounted() {
    console.log('parant inmounted')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
