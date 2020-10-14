import * as React from 'react'
import '@/common/css/login.less'
import { Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { get, post } from '../api/request'
import { useHistory } from 'react-router-dom'
import { normalDispatchEffect } from 'store/normal/effect'
import { menuDispatchEffect } from 'store/menu/effect'


console.log(get)

const Login = () => {
  const history = useHistory()
  const [sessionId, setSessionId] = normalDispatchEffect('sessionId', '')
  // redux菜单栏
  const [menuInfo, setMenuInfo] = menuDispatchEffect()

  const onFinish = (values: any) => {
    post('/user/login', values).then(res => {
      const data = res.data || {}
      const { sessionId, menu } = data
      setSessionId(sessionId)
      setMenuInfo(menu)
      history.push('/home')
    }, err => {
      console.log('登录出错了', err)
    })
  }

  return (
    <div className="login-wrapper">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <h3 className="form-title">系统登录</h3>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入账号！' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="账号"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="tip">账号：admin 密码：随便填  管理员权限</p>
          <p className="tip">账号：editor 密码：随便填  操作员权限</p>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login