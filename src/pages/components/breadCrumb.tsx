import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
const { useEffect, useState } = React
import { Breadcrumb } from 'antd'
import { RouteInfo } from 'types/home'
import { SideBar } from 'store/menu/types'
import { AppState } from 'store/index'
import { useSelector } from 'react-redux'


const BreadCrumb = () => {
  const location = useLocation()
  // 路由栈初始值
  const initState: RouteInfo = {}
  // 页面所有路由信息
  const [routerInfo, setRouterInfo] = useState(initState)
  // 当前路由栈信息
  const [currentRoute, setCurrentRoute] = useState([])

  // redux菜单栏
  let menuFunc: (state: AppState) => SideBar[] = (state) => state.menuReducer
  const menuInfo = useSelector(menuFunc)

  // 获取当前路由信息
  const getCurrentLocation = () => {
    const pathArr = location.pathname.split('/').filter(i => i)
    const currentPatharr = pathArr.map((item, index) => {
      const url = `/${ pathArr.slice(0, index + 1).join('/') }`
      return url
    })
    setCurrentRoute(currentPatharr)
  }

  // 切换路由就调整顶部导航
  useEffect(() => {
    getCurrentLocation()
  }, [location])

  // 获取页面路由信息
  const getRouteInfo = (routes: SideBar[], otherInfo: RouteInfo, baseInfo: string) => {
    routes.map(item => {
      if(item.path !== '/index') {
        otherInfo[baseInfo + item.path] = item.breadcrumbName
      } else {
        otherInfo['/home'] = item.breadcrumbName
      }
      item.children && item.children.length && getRouteInfo(item.children, otherInfo, baseInfo + item.path)
    })
    return otherInfo
  }

  // 生成路由字典
  useEffect(() => {
    const info = getRouteInfo(menuInfo, {}, '/home')
    console.log('路由配置信息', info)
    setRouterInfo(info)
  }, [menuInfo])

  return (
    <Breadcrumb className="home-bread">
      {
        currentRoute.map((item) => (
          <Breadcrumb.Item key={ item }>
            <Link to={ item }>{ routerInfo[item] }</Link>
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )

}

export default BreadCrumb