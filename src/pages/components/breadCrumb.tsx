import * as React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
const { useEffect, useState } = React
import { Breadcrumb } from 'antd'
import { RouteInfo } from 'types/home'
import { SideBar } from 'store/menu/types'
import { useMenuDispatchEffect } from 'hooks/menu/effect'
import { useIntl, FormattedMessage } from 'react-intl'
import { IntlMessage } from 'language/type'
import { messages } from 'language/intl'
import { homeRouter } from 'router/routeConfig'


const BreadCrumb = () => {
  const history = useHistory()
  const location = useLocation()
  // 路由栈初始值
  const initState: RouteInfo = {}
  // 页面所有路由信息
  const [routerInfo, setRouterInfo] = useState(initState)
  // 当前路由栈信息
  const [currentRoute, setCurrentRoute] = useState([])

  // redux菜单栏
  const [menuInfo] = useMenuDispatchEffect()
  // 国际语言切换
  const intl = useIntl()
  const getIntl = (intlName: IntlMessage) => intlName && intl.formatMessage(messages[intlName])

  // 获取当前路由信息
  const getCurrentLocation = () => {
    const pathArr = location.pathname.split('/').filter(i => i)
    const currentPatharr = pathArr.map((item, index) => {
      const url = `/${ pathArr.slice(0, index + 1).join('/') }`
      return url
    })
    console.log(4444, currentPatharr)
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

  const navToLink = (link: string) => {
    const realLink = recursion(link)
    if(currentRoute && currentRoute[currentRoute.length - 1] === realLink) {
      return 
    } else {
      history.push(link)
    }
  }

  const recursion: (link: string) => string = (link: string) => {
    for(let i = 0; i < homeRouter.length; i++) {
      const route = homeRouter[i]
      if(route.from === link) {
        console.log(2345, link)
        return recursion(route.to)
      }
    }
    return link
  }

  return (
    <div className="home-bread">
      <Breadcrumb className="home-bread-list">
        {
          currentRoute.map((item) => (
            <Breadcrumb.Item key={ item }>
              <span className="link" onClick={ () => { navToLink(item) } }>{ getIntl(routerInfo[item] as IntlMessage) }</span>
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    </div>
    
  )

}

export default BreadCrumb