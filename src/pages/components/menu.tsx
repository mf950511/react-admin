import * as React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
const { useEffect, useState } = React
import { Menu } from 'antd'
const { SubMenu } = Menu
import { SideBar } from 'store/menu/types'
import { IconObject } from 'types/home'
import { menuDispatchEffect } from 'store/menu/effect'
import { post } from 'api/request'
import { useIntl } from 'react-intl'
import { IntlMessage } from 'language/type'
import { messages } from 'language/intl'
import {
  BankOutlined,
  FileTextOutlined,
  SendOutlined,
  PropertySafetyOutlined,
} from '@ant-design/icons';

const Icons = {
  BankOutlined,
  FileTextOutlined,
  SendOutlined,
  PropertySafetyOutlined
}

// 渲染左侧菜单
const sideBarTree = (menuArr: SideBar[], getIntl: Function) => {
  if(menuArr && menuArr.length) {
    return menuArr.map((item, index) => {
      return (
        item.children 
        ? 
        <SubMenu className="home-menu" popupClassName="home-sider" key={ item.path } icon={ item.icon ? getIcons(item.icon, Icons) : '' } title={ getIntl(item.breadcrumbName) }>
          { sideBarTree(item.children, getIntl) }
        </SubMenu> : <Menu.Item className="home-menu-item" icon={ item.icon ? getIcons(item.icon, Icons) : '' } key={ item.path }>{ getIntl(item.breadcrumbName) }</Menu.Item>
      )
    })
  } else {
    return null
  }
}

// 获取icon类型
const getIcons = (str: string, Icons: IconObject) => {
  const TestBankOutlined = Icons[str]
  return <TestBankOutlined />
}

const LeftMenu = () => {
  const location = useLocation()
  const history = useHistory()
  const intl = useIntl()
  const getIntl = (intlName: IntlMessage) => intl.formatMessage(messages[intlName])
  // 选中菜单状态
  const initActiveMenu: Array<string> = ['/home']
  const [activeMenu, setActiveMenu] = useState(initActiveMenu)

  // redux菜单栏
  const [menuInfo, setMenuInfo] = menuDispatchEffect()

  // 菜单为空则进行请求
  const getMenu = async () => {
    const menu = await post('/user/menu').then(res => {
      const data = res.data || {}
      const { menu = [] } = data
      return menu
    })
    setMenuInfo(menu)
  }

  useEffect(() => {
    if(menuInfo && !menuInfo.length) {
      getMenu()
    }
  }, [])

  // 获取当前路由信息
  const getCurrentLocation = () => {
    const pathArr = location.pathname.split('/').filter(i => i)
    const currentPath = pathArr.length ? `/${ pathArr[pathArr.length - 1] }` : '/index'
    setActiveMenu([currentPath])
  }

  // 切换路由就调整顶部导航
  useEffect(() => {
    getCurrentLocation()
  }, [location])
  
  // 点击菜单页面
  const clickMenu = (item: any) => {
    const { keyPath = [] } = item
    const path = keyPath.reverse().join('')
    history.push('/home' + path)
  }

  return (
    <Menu theme="dark" mode="inline" selectedKeys={activeMenu} onClick={ clickMenu } className="home-menu">
      {
        sideBarTree(menuInfo, getIntl)
      }
    </Menu>
  )

}

export default LeftMenu