/*
 * @Author: your name
 * @Date: 2020-07-14 20:27:00
 * @LastEditTime: 2020-07-15 11:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\todos\types.ts
 */ 
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


export interface FilterActionType {
  type: string;
  payload: string
}

export interface Todo{
  complete: boolean;
  text: string;
  [PropName: string]: any;
}

export interface TodoPayload {
  id: string;
  complete?: boolean;
  text?: string;
}

export interface TodoActionType {
  type: string;
  payload: TodoPayload
}