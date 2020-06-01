import * as React from 'react'
import '@/common/css/login.less'
import { Form, Button, Checkbox, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { useState } = React
import request from '../api/request'
console.log(request)

function Login(){
  const onFinish = (values: any) => {
    console.log(values)
    request('/asdasd').then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
  console.log(123123, process.env.NODE_ENV)
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
      </Form>
    </div>
  )
}

export default Login