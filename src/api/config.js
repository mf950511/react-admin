/*
 * @Author: your name
 * @Date: 2020-06-01 10:56:43
 * @LastEditTime: 2020-06-01 14:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\api\request.js
 */ 
import axios from 'axios'
import { message } from 'antd'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { url = '' } = config
  if(!/^\/api\/user\//.test(url)) {
    // const { dispatch } = store
    console.log('要去登录页了')
  }
  return config;
}, function (error) {
  console.log('我出错了')
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
  console.log('响应请求成功', config)
}, function (error) {
  console.log('响应请求错误', error)
  if (error === undefined || error.code === 'ECONNABORTED') {
    message.warning('服务请求超时')
    return Promise.reject(error)
  }
  const { response: { status, statusText, data: { msg = '服务器发生错误' } } } = error
  const { response } = error
})

