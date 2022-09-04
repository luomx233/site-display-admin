<template>
  <el-form ref="addForm" :model="form" :rules="rules" label-width="140px" label-position="left">
    <el-form-item label="项目名称：" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="项目称号：" prop="title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="项目部署地址：" prop="displayUrl">
      <el-input v-model="form.displayUrl" />
    </el-form-item>
    <el-form-item label="项目仓库地址：" prop="repositoryUrl">
      <el-input v-model="form.repositoryUrl" />
    </el-form-item>
    <el-form-item label="介绍：" prop="intro">
      <el-input v-model="form.intro" type="textarea" />
    </el-form-item>
    <el-form-item label="目录结构：" prop="tree">
      <el-input v-model="form.tree" type="textarea" />
    </el-form-item>
    <el-form-item label="使用技术：" prop="skills">
      <el-row>
        <el-col class=" mb-2" span="24" v-for="(skill, index) in form.skills" :key="skill.name">
          <el-input class=" w-40 mr-5" v-model="skill.name" />
          <el-input class=" w-40 mr-5" v-model="skill.url" />
          <el-button @click="removeSkill(index)" class=" w-20 mr-5">删除</el-button>
        </el-col>
      </el-row>
      <el-row class=" w-full">
        <el-input required class=" w-40 mr-5" v-model="skills.name" />
        <el-input required class=" w-40 mr-5" v-model="skills.url" />
        <el-button @click="addSkillInfo">添加技术信息</el-button>
      </el-row>
    </el-form-item>
    <el-form-item label="主要依赖包及版本：" prop="package">
      <el-row>
        <el-col class=" mb-2" span="24" v-for="(usepackage, index) in form.package" :key="usepackage.name">
          <el-input class=" w-40 mr-5" v-model="usepackage.name" />
          <el-input class=" w-40 mr-5" v-model="usepackage.version" />
          <el-button @click="removePackage(index)" class=" w-20 mr-5">删除</el-button>
        </el-col>
      </el-row>
      <el-row class=" w-full">
        <el-input required class=" w-40 mr-5" v-model="usepackage.name" />
        <el-input required class=" w-40 mr-5" v-model="usepackage.version" />
        <el-button @click="addPackageInfo">添加依赖包信息</el-button>
      </el-row>
    </el-form-item>
    <el-form-item label="上传封面图：" prop="coverUrl">
      <upload @getCoverUrl="getCoverUrl" @clearCoverUrl="clearCoverUrl"></upload>
      &nbsp;&nbsp;
      <el-input required class=" w-40 mr-5" v-model="form.coverUrl" disabled />
    </el-form-item>
    <el-form-item>
      <el-button @click="submitForm">创建</el-button>
      <el-button @click="resetForm">清空</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import upload from '@/components/upload.vue';
import { ProjectDto } from '@/dto/project.dto';
import { reactive ,ref} from 'vue'
import { ElMessage} from 'element-plus'
import type{ FormInstance,  FormRules } from 'element-plus'
const addForm = ref<FormInstance>()
// do not use same name with ref
const form = reactive<ProjectDto>(new ProjectDto())
const usepackage = reactive({
  name:'',version:''
})
const skills = reactive({
  name:'',url:''
})
const getCoverUrl =(url)=>{
  form.coverUrl = url
}
const clearCoverUrl =()=>{
  form.coverUrl = ''
}
const addSkillInfo = () => {
  if(skills.name&&skills.url){
    form.skills.push({
    name:skills.name,
    version:skills.url
  })
}else{
  window.alert('不能添加空值！')
}
}
const addPackageInfo = () => {
  if(usepackage.name&&usepackage.version){
  form.package.push({
    name:usepackage.name,
    version:usepackage.version
  })
}else{
  window.alert('不能添加空值！')
}}
const removeSkill = (index:number) => {
  form.skills.splice(index,1)
}

const removePackage = (index:number) => {
  form.package.splice(index,1)
}
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  title: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  intro: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  coverUrl: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  tree: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  displayUrl: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
  repositoryUrl: [
    { required: true, message: '不能为空！', trigger: 'blur' },
    { required: true, message: '不能为空！', trigger: 'change' },
  ],
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>