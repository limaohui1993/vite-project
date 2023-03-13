<template>
 <div>
    <h1>登陆</h1>
 </div>
</template>
<script language="ts" setup>
import {getLoginInfo} from "@/api/common"
import {onMounted} from "@vue/runtime-core"

onMounted(()=>{
   // getLoginInfo().then((result)=>{
   //    console.log("result",result);
   // })
})
</script>
<style lang='scss' scoped>
 
</style>
