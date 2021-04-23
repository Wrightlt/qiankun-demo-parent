<template>
  <div class="portal">
    <h1>This is parent about page</h1>
    <div id="appContainer"></div>
  </div>
</template>

<script>
import { start } from 'qiankun';
export default {
  name: 'Portal',
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
}
</script>
<style scoped>
h1{
  color: green;
}
</style>