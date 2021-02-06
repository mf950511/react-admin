/*
 * @Author: your name
 * @Date: 2020-06-01 10:56:43
 * @LastEditTime: 2020-06-11 19:28:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\api\request.js
 */ 
import axios from 'axios'
import './config.ts'
import { RequestCallback, GetOrPostRequestCallback } from './type'

const request: RequestCallback = async (_options) => {
  // 默认GET方法
  return axios(_options)
}

const get: GetOrPostRequestCallback = (url, data = {}, _options = {}) => {
  return request({ ..._options, data, url, method: 'GET' })
}

const post:GetOrPostRequestCallback = (url, data = {}, _options = {}) => {
  return request({ ..._options, data, url, method: 'POST' })
}

export { get, post }
export default request

