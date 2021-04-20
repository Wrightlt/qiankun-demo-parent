<template>
    <div>
        app1 container
        <div id="app1">
          <!-- 子应用盒子 -->
          <div id="app1-view1" class="app-view-box" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import { start } from 'qiankun';

export default {
  name: 'APP1',
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  }
}
</script>