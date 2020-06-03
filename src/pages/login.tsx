import * as React from 'react'
import '@/common/css/login.less'
import { Form, Button, Checkbox, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { useState } = React
import request from '../api/request'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/index'
console.log(request)

function mapStateToProps(state: any){
  const { crement } = state
  console.log(crement)
  return {
    num: crement.num
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}


const Login = (props) => {
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
        <h3 className="form-title" onClick={props.decrement}>系统登录</h3>
        <h3 onClick={props.increment}>{ props.num }123</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)