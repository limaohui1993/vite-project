<template>
 <div>
    <h1>登陆</h1>
 </div>
</template>
<script lang="ts" setup>
import { getLoginInfo} from "@/api/common"
import { ILoginInfo} from "@/api/types/common"
import {onMounted,ref} from "@vue/runtime-core"
let slide=ref<ILoginInfo['slide']>([])
onMounted(()=>{
   console.log("slide",slide);
   
   // getLoginInfo().then((result)=>{
   // })
})
</script>
<style lang='scss' scoped>
 
</style>
