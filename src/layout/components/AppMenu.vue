<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :collapse="$store.state.collapse"
        router
      >
        <el-menu-item index="/">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品</span>
          </template>
          <el-menu-item index="/product/productList">
          <el-icon><icon-menu /></el-icon>
          <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="/product/productAttr">
          <el-icon><icon-menu /></el-icon>
          <span>商品规格</span>
        </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/login">
          <el-icon><document /></el-icon>
          <span>登陆</span>
        </el-menu-item>
      </el-menu>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>
<style lang='scss' scoped>
 .el-menu{
    border-right: none;
 }
</style>
