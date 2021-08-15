<template>
  <div>
    <el-form label-width="60px" :model="phone">
      <el-form-item label="账号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .get-code-btn {
    margin-left: 8px;
  }
}
</style>
