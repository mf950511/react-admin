/*
 * @Author: your name
 * @Date: 2020-06-11 14:01:22
 * @LastEditTime: 2020-06-11 14:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\api\type.ts
 */ 
import { DefaultParams } from 'types/common'
export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'put' | 'PUT' | 'patch' | 'PATCH'

export interface RequestAxios{
  url: string,
  method: Method,
  data: DefaultParams
}
export type GetOrPostRequestCallback = (url: string, data: DefaultParams, _options: DefaultParams) => void

export type RequestCallback = (_options: RequestAxios) => void