/*
 * @Author: your name
 * @Date: 2020-06-01 10:56:43
 * @LastEditTime: 2020-06-01 11:39:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\api\request.js
 */ 
import axios from 'axios'
import './config.js'

const request = async (_options) => {
  // 默认GET方法
  const method = _options.method || 'GET'
  return axios(_options)
}

const get = (url, params, _options) => {
  return request({ ..._options, params, url })
}

const post = (url, data, _options) => {
  return request({ ..._options, data, url }, 'POST')
}

export { get, post }
export default request

