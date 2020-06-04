/*
 * @Author: your name
 * @Date: 2020-06-04 14:32:22
 * @LastEditTime: 2020-06-04 14:36:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\number\types.ts
 */ 

export const INCREMENT = 'INCREMENT'

export const DECREMENT = 'DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT,
  payload: number
}

interface DecrementAction {
  type: typeof DECREMENT,
  payload: number
}

export type NumberActionTypes = IncrementAction | DecrementAction