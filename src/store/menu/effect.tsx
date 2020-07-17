import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/index'
import { SideBar } from 'store/menu/types'
import { setMenu } from './actions'



export const menuDispatchEffect: () => [SideBar[], Function] = () => {
  let menuFunc: (state: AppState) => SideBar[] = (state) => state.menuReducer
  const dispatch = useDispatch()
  const menuInfo = useSelector(menuFunc)
  // 切换侧边栏收起状态
  const setMenuInfo = (menu: SideBar[]) => { 
    console.log(333, menu)
    dispatch(setMenu(menu)) 
  }
  return [menuInfo, setMenuInfo]
}