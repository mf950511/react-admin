/*
 * @Author: your name
 * @Date: 2020-06-04 14:04:11
 * @LastEditTime: 2020-06-04 14:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\chat\types.ts
 */ 

export const SEND_MESSAGE = 'SEND_MESSAGE'

export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export interface Message {
  name: string;
  age: number;
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[]
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE,
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE,
  meta: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction

