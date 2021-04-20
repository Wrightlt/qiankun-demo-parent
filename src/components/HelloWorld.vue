<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate() {
    console.log('child beforeCreate')
  },
  created() {
    console.log('child created')
  },
  mounted() {
    console.log('child mounted')
  },
  unmounted() {
    console.log('child inmounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
