<template>
  <div class="page-search">
    <yd-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <el-button
          icon="el-icon-refresh"
          @click="handleResetClick"
          size="medium"
          >重置</el-button
        >
        <el-button icon="el-icon-search" type="primary" size="medium"
          >搜索</el-button
        >
      </template>
    </yd-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import YdForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    YdForm
  },
  setup(props) {
    // formData中的属性动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 重置
    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
