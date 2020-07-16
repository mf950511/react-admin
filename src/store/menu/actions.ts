/*
 * @Author: your name
 * @Date: 2020-07-16 11:24:40
 * @LastEditTime: 2020-07-16 11:25:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\store\menu\actions.ts
 */ 
import { SideBar, SET_MENU } from './types'
export const setMenu = (menu: SideBar[]) => ({
  type: SET_MENU,
  menu
})