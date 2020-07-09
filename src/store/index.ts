/*
 * @Author: your name
 * @Date: 2020-06-04 14:54:16
 * @LastEditTime: 2020-07-09 15:54:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\reducer.ts
 */ 
import { combineReducers } from 'redux'
import numberReducer from './number/reducers'
import chatReducer from './chat/reducers'
import { ChatState } from './chat/types'
import { normalReducer } from './normal/reducers'
import { OtherState } from './normal/types'
const rootReducer = combineReducers({
  numberReducer,
  chatReducer,
  normalReducer
})

export type AppState = {
  numberReducer: number,
  chatReducer: ChatState,
  normalReducer: OtherState
}

export default rootReducer