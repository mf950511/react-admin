/*
 * @Author: your name
 * @Date: 2020-07-07 16:31:26
 * @LastEditTime: 2020-07-08 15:43:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\types\home.ts
 */ 

export interface SideBar{
  breadcrumbName: string;
  children?: Array<SideBar>,
  [PropName: string]: any;
}

export interface IconObject { // 处理icon的类型
  [PropName: string]: any
}

export interface RouteInfo{
  [PropName: string]: string
}