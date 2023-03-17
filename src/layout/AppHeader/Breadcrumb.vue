<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
        v-for="(item,index) in routes"
        :key="index"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
import { computed } from "vue"
import {useRouter} from "vue-router"
const router=useRouter()
const routes=computed(()=>{
    return router.currentRoute.value.matched.filter(item=>item.meta.title)
})
</script>

<style lang="scss" scoped></style>
