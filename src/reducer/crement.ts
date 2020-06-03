/*
 * @Author: your name
 * @Date: 2020-06-03 11:29:28
 * @LastEditTime: 2020-06-03 16:21:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\reducer\crement.ts
 */ 
import { INCREMENT, DECREMENT } from '../constants/index'

const initialState = {
  num: 12
}

const changeNum = (state: object = initialState, action: any) => {
  console.log(123, action, state)
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, { num: state.num + 1 })
    case DECREMENT:
      return Object.assign({}, state, { num: state.num - 1 })
    default: 
      return state
  }
}

export default changeNum