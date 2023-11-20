<template>
  <div class="side-bar-wrapper">
    <el-menu :default-active="activeIndex" @select="handleSelect" class="text-blue text-9xl">
      <SideNavItem v-for="route in sideMenu" :route="route" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideNavItem from './SideNavItem.vue'

const activeIndex = ref(null)
const sideMenu = ref([])
</script>

<style scoped lang="less">
.side-bar-wrapper {
  width: 240px;
  height: calc(100vh - 60px);
  .el-menu {
    height: 100%;
  }
}
</style>
