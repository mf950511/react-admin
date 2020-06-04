/*
 * @Author: your name
 * @Date: 2020-06-04 14:04:27
 * @LastEditTime: 2020-06-04 14:54:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\chat\reducers.ts
 */ 
import { ChatState, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from './types'

const initialState: ChatState = {
  messages: []
}

const chatReducer = (state = initialState, action: ChatActionTypes): ChatState => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(message => message.timestamp !== action.meta.timestamp)
      }
    default:
      return state
  }
}

export default chatReducer