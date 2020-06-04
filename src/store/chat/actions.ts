/*
 * @Author: your name
 * @Date: 2020-06-04 14:04:31
 * @LastEditTime: 2020-06-04 14:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\chat\actions.ts
 */ 
import { Message, SEND_MESSAGE, DELETE_MESSAGE } from './types'

export const sendMessageAction = (newMessage: Message) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

export const deleteMessageAction = (timestamp: number) => {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}