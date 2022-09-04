<template>
  <el-upload ref="uploadRef" action="http://localhost:7749/upload" list-type="picture-card" :auto-upload="false"
    :on-success="handleUpImage" name="image" :limit="1" :on-remove="handleRemove">
    <el-icon>
      <Plus />
    </el-icon>
    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <el-icon>
              <zoom-in />
            </el-icon>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <el-icon>
              <Delete />
            </el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <el-button class="ml-3" @click="submitUpload">
    upload to server
  </el-button>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import { type UploadInstance,type UploadFile, type UploadProps, ElMessage } from 'element-plus'
const uploadRef = ref<UploadInstance>()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const submitUpload = () => {
  uploadRef.value!.submit()
}
const emit = defineEmits(['getCoverUrl','clearCoverUrl'])
const handleUpImage=(res)=>{
  emit('getCoverUrl',res)
}
const handleRemove= () => {
  uploadRef.value!.clearFiles()
  emit('clearCoverUrl')
}

// const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
//   if (rawFile.type !== 'image/jpeg') {
//     ElMessage.error('Avatar picture must be JPG format!')
//     return false
//   } else if (rawFile.size / 1024 / 1024 > 2) {
//     ElMessage.error('Avatar picture size can not exceed 2MB!')
//     return false
//   }
//   return true
// }

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
  console.log(dialogImageUrl);
}
</script>