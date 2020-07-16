/*
 * @Author: your name
 * @Date: 2020-07-16 11:07:03
 * @LastEditTime: 2020-07-16 11:18:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\menu\reducer.ts
 */ 

import { SideBar, SetMenu, SET_MENU } from './types'
const initStateMenu: SideBar[] = []
export const menuReducer = (state = initStateMenu, action: SetMenu) => {
  switch(action.type) {
    case SET_MENU:
      return action.menu
    default:
      return state
  }
}