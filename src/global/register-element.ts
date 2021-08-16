import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
