/*
 * @Author: your name
 * @Date: 2020-06-04 14:54:16
 * @LastEditTime: 2020-06-11 19:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\reducer.ts
 */ 
import { combineReducers } from 'redux'
import numberReducer from './number/reducers'
import chatReducer from './chat/reducers'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { ChatState } from './chat/types'

const rootReducer = (history: History) => combineReducers({
  numberReducer,
  chatReducer,
  router: connectRouter(history)
})

export type AppState = {
  numberReducer: number,
  chatReducer: ChatState,
  router: RouterState
}

export default rootReducer