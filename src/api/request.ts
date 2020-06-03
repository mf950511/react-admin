/*
 * @Author: your name
 * @Date: 2020-06-01 10:56:43
 * @LastEditTime: 2020-06-02 09:19:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\api\request.js
 */ 
import axios from 'axios'
import './config.ts'

const request = async (_options: any) => {
  // 默认GET方法
  const method = _options.method || 'GET'
  return axios(_options)
}

const get = (url: string, params: any, _options: any) => {
  return request({ ..._options, params, url })
}

const post = (url: string, data: any, _options: any) => {
  return request({ ..._options, data, url }, 'POST')
}

export { get, post }
export default request

