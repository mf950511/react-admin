/*
 * @Author: your name
 * @Date: 2020-06-04 14:32:31
 * @LastEditTime: 2020-06-04 15:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\number\reducers.ts
 */ 
import { NumberActionTypes, INCREMENT, DECREMENT } from './types'

const initialState = 0

const numberReducer = (state = initialState, action: NumberActionTypes) : number => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
}

export default numberReducer