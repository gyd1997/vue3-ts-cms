<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://thirdqq.qlogo.cn/g?b=sdk&k=IFxSAGf11KAqbpvZo7Yibqw&s=140&t=1555543672"
          size="small"
        />
        <span style="margin-left: 10px">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
