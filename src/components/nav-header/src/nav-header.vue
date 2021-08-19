<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import UserInfo from './user-info.vue'
import navBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    navBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑数据
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      handleFoldClick,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
