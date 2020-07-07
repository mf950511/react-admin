import * as React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const { useState, useEffect } = React
import '@/common/css/home.less'
import { Breadcrumb } from 'antd';
import * as Icons from '@ant-design/icons';
import { Route, Redirect, useHistory,HashRouter as Router, Switch as RouterSwitch, Link, useLocation } from 'react-router-dom'
import Doc from 'pages/doc'
import Guide from 'pages/guide'
import PageAuthority from 'pages/pageAuthority'
import UserAuthority from 'pages/userAuthority'
import RouterTest1 from 'pages/routerTest'
import RouterTest2 from 'pages/routerTest2'
import HomeIndex from 'pages/homeIndex'
import { SideBar, IconObject, RouteInfo } from 'types/home'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';

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


// 获取icon类型
const getIcons = (str: string, Icons: IconObject) => {
  const TestBankOutlined = Icons[str]
  return <TestBankOutlined />
}

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

const Home = () => {
  const [inProp, setInProp] = useState(false);
  // 路由栈初始值
  const initState: RouteInfo = {}
  const initActiveMenu: Array<string> = ['/home']
  // 切换侧边栏收起状态
  const [collapsed, setCollapsed] = useState(false)
  // 页面所有路由信息
  const [routerInfo, setRouterInfo] = useState(initState)
  // 当前路由栈信息
  const [currentRoute, setCurrentRoute] = useState([])
  const [activeMenu, setActiveMenu] = useState(initActiveMenu)
  const location = useLocation()
  const history = useHistory()

  // 获取当前路由信息
  const getCurrentLocation = () => {
    const pathArr = location.pathname.split('/').filter(i => i)
    const currentPath = pathArr.length ? `/${ pathArr[pathArr.length - 1] }` : '/index'
    const currentPatharr = pathArr.map((item, index) => {
      const url = `/${ pathArr.slice(0, index + 1).join('/') }`
      return url
    })
    console.log(66666, currentPath, currentPatharr)
    setActiveMenu([currentPath])
    setCurrentRoute(currentPatharr)
  }

  // 切换路由就调整顶部导航
  useEffect(() => {
    getCurrentLocation()
  }, [location])


  // 生成路由字典
  useEffect(() => {
    const info = getRouteInfo(menu, {}, '/home')
    console.log('路由配置信息', info)
    setRouterInfo(info)
  }, [menu])

  // 点击菜单页面
  const clickMenu = (item: any) => {
    const { keyPath = [] } = item
    const path = keyPath.reverse().join('')
    history.push('/home' + path)
  }

  return (
    <Layout className="home-wrapper">
      <Sider className="home-sider" trigger={ null } collapsible collapsed={ collapsed } >
        <Menu theme="dark" mode="inline" selectedKeys={activeMenu} onClick={ clickMenu } className="home-menu">
          {
            sideBarTree(menu)
          }
        </Menu>
      </Sider>
      <Layout>
        <Header className="home-header">
          <div className="home-operator flex-center" onClick={ () => { setCollapsed(!collapsed) } }>
            { collapsed ? <MenuUnfoldOutlined className="home-operator-icon"/> : <MenuFoldOutlined  className="home-operator-icon"/> }
          </div>
          <Breadcrumb>
            {
              currentRoute.map((item) => (
                <Breadcrumb.Item key={ item }>
                  <Link to={ item }>{ routerInfo[item] }</Link>
                </Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
        </Header>
        <Content className="home-content">
          <Router>
            <TransitionGroup>
              <CSSTransition
              in={inProp}
              key={location.key}
              classNames="my-node"
              timeout={300}
              >
                <RouterSwitch>
                  <Route path="/home/index" component={ HomeIndex }></Route>
                  <Route path="/home/doc" component={ Doc }></Route>
                  <Route path="/home/guide" component={ Guide }></Route>
                  <Route path="/home/authority/pageAuthority" component={ PageAuthority }></Route>
                  <Route path="/home/authority/characterAuthority" component={ UserAuthority }></Route>
                  <Route path="/home/authority/child/routerTest1" component={ RouterTest1 }></Route>
                  <Route path="/home/authority/child/routerTest2" component={ RouterTest2 }></Route>
                  <Redirect to="/home/authority/child/routerTest1" from="/home/authority/child"></Redirect>
                  <Redirect to="/home/authority/pageAuthority" from="/home/authority"></Redirect>
                  <Redirect to="/home/index" from="/home"></Redirect>
                </RouterSwitch>
              </CSSTransition>
            </TransitionGroup>
            
          </Router>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home