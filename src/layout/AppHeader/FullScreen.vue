<template>
  <el-icon @click="toggleFullScreen"><FullScreen /></el-icon>
</template>

<script setup>
import {} from "vue"
import {
  Document,
  Menu as IconMenu,
  FullScreen,
  Setting,
} from '@element-plus/icons-vue'

const toggleFullScreen=()=> {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
</script>

<style lang="scss" scoped></style>
