<template>
  <el-button text :icon="Edit">
    注销
  </el-button>
  <el-menu mode="horizontal" :default-active="activeIndex" background-color="#4c4c4c" text-color="#ededed" :ellipsis="false" @select.self.capture="handleSelect">
    <el-sub-menu index="1" :teleported="true">
      <template #title>{{ userName }}</template>
      <el-menu-item index="1-1">修改密码</el-menu-item>
      <el-menu-item index="2-2" @click="logout">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Edit } from '@element-plus/icons-vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log('key -->', key, ';  keyPath  -->', keyPath);
}

const userName = ref('超级管理员')

const router = useRouter()
const logout = () => {
  router.push('/home')
}
</script>

<style scoped lang="less">
.user-control {
  display: flex;
  align-items: center;
}
</style>
