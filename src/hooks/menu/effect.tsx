import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/index'
import { SideBar } from 'store/menu/types'
import { setMenu } from 'store/menu/actions'
import { CallbackFunction } from 'types/common'



export const useMenuDispatchEffect: () => [SideBar[], CallbackFunction] = () => {
  const menuFunc: (state: AppState) => SideBar[] = (state) => state.menuReducer
  const dispatch = useDispatch()
  const menuInfo = useSelector(menuFunc)
  // 切换侧边栏收起状态
  const setMenuInfo = (menu: SideBar[]) => { 
    dispatch(setMenu(menu)) 
  }
  return [menuInfo, setMenuInfo]
}