/*
 * @Author: your name
 * @Date: 2020-06-04 14:54:16
 * @LastEditTime: 2020-07-14 20:52:39
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
import { todosReducer, filterReducer } from './todos/reducer'
import { Todo } from './todos/types'
const rootReducer = combineReducers({
  numberReducer,
  chatReducer,
  normalReducer,
  todosReducer,
  filterReducer
})

export type AppState = {
  numberReducer: number,
  chatReducer: ChatState,
  normalReducer: OtherState,
  todosReducer: Todo[],
  filterReducer: string,
}

export default rootReducer