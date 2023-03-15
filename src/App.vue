<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import locale from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
   <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
