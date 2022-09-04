<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute()
const userStore = useUserStore()

const activeIndex = ref(route.path.split('/')[2])
const handleSelect = (key: string, keyPath: string[]) => {
  router.push('/home/' + key)
}
</script>

<template>
  <main>
    <el-row justify="center">
      <el-col :xs="24" :sm="24" :md="20" :lg="17" :xl="15">
        <!-- header -->
        <el-row justify="space-between" class=" mt-5">
          <el-col :span="4">欢迎你，管理员 <span class=" text-red-400">{{ userStore.username }}</span></el-col>
          <el-col :span="4" class=" text-right">
            <el-button @click="userStore.clearUser()">注销</el-button>
          </el-col>
        </el-row>
        <!-- navbar -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="list">总览</el-menu-item>
          <el-menu-item index="add">添加</el-menu-item>
          <el-menu-item index="3" disabled>更改</el-menu-item>
        </el-menu>
        <!-- view -->
        <div class="mt-5">
          <RouterView />

        </div>
      </el-col>
    </el-row>
  </main>
</template>