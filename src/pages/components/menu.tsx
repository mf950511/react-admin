import * as React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
const { useEffect, useState } = React
import { Menu } from 'antd'
const { SubMenu } = Menu
import { SideBar } from 'store/menu/types'
import * as Icons from '@ant-design/icons';
import { IconObject } from 'types/home'
import { menuDispatchEffect } from 'store/menu/effect'

const menu = [
  {
    breadcrumbName: '首页',
    icon: 'BankOutlined',
    path: '/index',
  },
  {
    breadcrumbName: '文档',
    icon: 'FileTextOutlined',
    path: '/doc',
  },
  {
    breadcrumbName: '引导页',
    icon: 'SendOutlined',
    path: '/guide',
  },
  {
    breadcrumbName: '权限测试页',
    icon: 'PropertySafetyOutlined',
    path: '/authority',
    children: [
      {
        breadcrumbName: '页面权限',
        path: '/pageAuthority',
      },
      {
        breadcrumbName: '角色权限',
        path: '/characterAuthority',
        icon: 'SendOutlined',
      },
      {
        breadcrumbName: '子路由',
        path: '/child',
        children: [
          {
            breadcrumbName: "路由1",
            path: '/routerTest1',
            icon: 'SendOutlined',
          },
          {
            breadcrumbName: '路由2',
            path: '/routerTest2',
            icon: 'SendOutlined',
          }
        ]
      }
    ]
  }
]

// 渲染左侧菜单
const sideBarTree = (menuArr: SideBar[]) => {
  if(menuArr && menuArr.length) {
    return menuArr.map((item, index) => {
      return (
        item.children 
        ? 
        <SubMenu className="home-menu" popupClassName="home-sider" key={ item.path } icon={ item.icon ? getIcons(item.icon, Icons) : '' } title={ item.breadcrumbName }>
          { sideBarTree(item.children) }
        </SubMenu> : <Menu.Item className="home-menu-item" icon={ item.icon ? getIcons(item.icon, Icons) : '' } key={ item.path }>{ item.breadcrumbName }</Menu.Item>
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
  // 选中菜单状态
  const initActiveMenu: Array<string> = ['/home']
  const [activeMenu, setActiveMenu] = useState(initActiveMenu)

  // redux菜单栏
  const [menuInfo, setMenuInfo] = menuDispatchEffect()

  useEffect(() => {
    setMenuInfo(menu)
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
        sideBarTree(menuInfo)
      }
    </Menu>
  )

}

export default LeftMenu