<template>
    <div class="common-layout">
    <el-container>
      <el-aside >
        <AppMenu></AppMenu>
      </el-aside>
      <el-container>
        <el-header>
          <ToggleSideBar></ToggleSideBar>
          <Breadcrumb></Breadcrumb>
          <FullScreen></FullScreen>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppMenu from "@/layout/components/AppMenu.vue";
import ToggleSideBar from "@/layout/AppHeader/ToggleSideBar.vue";
import Breadcrumb from "@/layout/AppHeader/Breadcrumb.vue";
import FullScreen from "@/layout/AppHeader/FullScreen.vue";
</script>

<style lang="scss" scoped> 
.common-layout {
  // .el-header,
  .el-footer,
  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

   .el-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
   }
  .el-footer {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-aside {
    background-color: #304156;
    color: var(--el-text-color-primary);
    width: auto;
    // text-align: center;
  }
  .el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

  .el-main {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-text-color-primary);
    text-align: center;

    height: 150px;
  }
  .el-container{
    height: 100vh;
    width: 100vw;
  }
}
</style>