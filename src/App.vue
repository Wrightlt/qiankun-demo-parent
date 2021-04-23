<template>
  <div id="app">
    <p>parent text</p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" v-show="false"/> -->
    
    <!-- 父应用渲染用 -->
    <router-view></router-view>

    <!-- 子应用盒子 -->
    <!-- <div id="root-view" class="app-view-box" v-html="content"></div> -->
        
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
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
#appTest {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid blue;
}

.appContainer{
  background: #ccc;
  padding: 20px;
}
</style>
