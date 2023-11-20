<template>
  <el-row>
    <el-col :span="6">
      <Title/>
    </el-col>
    <el-col :span="6">
      <TopNav/>
    </el-col>
    <el-col :span="6" :offset="6">
      <User-control/>
    </el-col>
  </el-row>
</template>

<script setup>
// import Title from './components/Title.vue'
// import TopNav from './components/TopNav.vue'
// import UserControl from './components/UserControl.vue'
</script>

<style scoped lang="less">
.el-row {
  color: #ededed;
  background-color: #4c4c4c;
  .el-col {
    height: 60px;
    display: flex;
    &:nth-child(3) {
      line-height: 60px;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
