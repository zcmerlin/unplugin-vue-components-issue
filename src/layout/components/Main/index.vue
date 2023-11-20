<template>
  <div class="main-wrapper">
    <router-view name="side" />
    <!-- <side-nav /> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import SideNav from '@/layout/components/SideNav/index.vue'
</script>

<style scoped lang="less">
.main-wrapper {
  display: flex;
  height: calc(100vh - 60px);
  background-color: var(--primary-color);
}
</style>
