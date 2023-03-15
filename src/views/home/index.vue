<template>
 <div>
    <h1>首页</h1>
    <el-button>aa</el-button>
    <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
      />
 </div>
</template>
<script lang="ts" setup>
import User from "@/api/user.ts"
console.log(User);
let value1=""
</script>
<style lang='scss' scoped>
 h1 {
   color: $color;
 }
</style>
