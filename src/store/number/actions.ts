/*
 * @Author: your name
 * @Date: 2020-06-04 14:32:26
 * @LastEditTime: 2020-06-04 14:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\number\actions.ts
 */ 

import { INCREMENT, DECREMENT, NumberActionTypes } from './types'



export const incrementAction = (changeNumber: number) : NumberActionTypes => {
  return {
    type: INCREMENT,
    payload: changeNumber
  }
}

export const decrementAction = (changeNumber: number) : NumberActionTypes => {
  return {
    type: DECREMENT,
    payload: changeNumber
  }
}