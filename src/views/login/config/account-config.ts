export const rules = {
  name: [
    { required: true, message: '用户名是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      message: '密码必须是6-18个字符',
      trigger: 'blur'
    }
  ]
}
