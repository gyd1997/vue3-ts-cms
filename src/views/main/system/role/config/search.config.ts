import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '140px',
  itemStyle: { padding: '5px 30px' },
  colLayout: { span: 8 },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名称'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
