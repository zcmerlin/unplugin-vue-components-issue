<template>
  <el-sub-menu v-if="props.route.children && props.route.children.length > 0" :index="props.route.path">
    <template #title>{{ props.route.title }}</template>
    <SideNavItem v-for="child in props.route.children" :route="child"/>
  </el-sub-menu>
  <div v-else>
    <el-menu-item :index="props.route.path">{{ props.route.title }}</el-menu-item>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  route: Object
})
</script>
