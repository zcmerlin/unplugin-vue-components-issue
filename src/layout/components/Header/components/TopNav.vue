<template>
  <el-menu mode="horizontal" :default-active="activeIndex" background-color="#4c4c4c" text-color="#ededed" :ellipsis="false" @select="handleSelect">
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  // TODO:
}

const topNav = ref([])
</script>

<style scoped lang="less">
</style>
