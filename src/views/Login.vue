<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const userFormRef = ref<FormInstance>()

const userForm = reactive({
  username: userStore.username,
  password: '',
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名！', trigger: 'blur' },
    { min: 4, max: 12, message: '长度为4-12！', trigger: 'blur' },
    { min: 4, max: 12, message: '长度为4-12！', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
    { min: 4, message: '密码最少为4位！', trigger: 'blur' },
    { min: 4, message: '密码最少为4位！', trigger: 'change' },
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      userStore.login(userForm)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="centerBox">
    <el-form ref="userFormRef" :model="userForm" :rules="rules" label-position="top">
      <h2 class=" text-xl text-center mb-5">登录</h2>
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="userForm.username" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="userForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm(userFormRef)" class=" w-40 m-auto">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.centerBox {
  @apply w-80 m-auto mt-44
}
</style>