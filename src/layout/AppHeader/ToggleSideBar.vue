<template>
    <el-icon 
    class="fll"
    @click="handleCollapse"
    >
    <MoreFilled />
    </el-icon>
</template>

<script lang="ts" setup>
import {computed} from "vue"
import {
  Document,
  Menu as IconMenu,
  MoreFilled,
  Setting,
} from '@element-plus/icons-vue'
import {useStore} from "@/store"
const store=useStore()
const handleCollapse=()=>store.commit('setCollapse',!store.state.collapse)
</script>

<style lang="scss" scoped>
</style>
