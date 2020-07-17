/*
 * @Author: your name
 * @Date: 2020-06-04 14:54:16
 * @LastEditTime: 2020-07-16 11:30:56
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
import { menuReducer } from './menu/reducer'
import { SideBar } from './menu/types'
import { createStore } from 'redux'
const rootReducer = combineReducers({
  numberReducer,
  chatReducer,
  normalReducer,
  todosReducer,
  filterReducer,
  menuReducer,
})

export type AppState = {
  numberReducer: number,
  chatReducer: ChatState,
  normalReducer: OtherState,
  todosReducer: Todo[],
  filterReducer: string,
  menuReducer: SideBar[],
}

const store = createStore(rootReducer)

export default store