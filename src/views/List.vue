<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="项目名称" width="180" />
    <el-table-column prop="name" label="项目简介" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column fixed="right" label="操作" width="220">
      <template #default>
        <el-button link type="primary">查看</el-button>
        <el-button link type="primary">修改</el-button>
        <el-button link type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>