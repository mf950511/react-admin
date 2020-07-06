import * as React from 'react'
import { Layout, Menu, Switch } from 'antd'
import { useDispatch } from 'react-redux'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const { useState } = React
import '@/common/css/home.less'
import { Breadcrumb } from 'antd';
import * as Icons from '@ant-design/icons';
import { Route, Redirect, useHistory,HashRouter as Router, Switch as RouterSwitch } from 'react-router-dom'
import Doc from 'pages/doc'
import Guide from 'pages/guide'
import PageAuthority from 'pages/pageAuthority'
import UserAuthority from 'pages/userAuthority'
import RouterTest1 from 'pages/routerTest'
import RouterTest2 from 'pages/routerTest2'
import HomeIndex from 'pages/homeIndex'
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';
const routes = [
  {
    path: 'login',
    breadcrumbName: '首页',
  },
  {
    path: 'home',
    breadcrumbName: '嵌套路由',
  },
  {
    path: 'second',
    breadcrumbName: '菜单一',
  },
];

const menu = [
  {
    name: '首页',
    icon: 'BankOutlined',
    path: '/home',
  },
  {
    name: '文档',
    icon: 'FileTextOutlined',
    path: '/home/doc',
  },
  {
    name: '引导页',
    icon: 'SendOutlined',
    path: '/home/guide',
  },
  {
    name: '权限测试页',
    icon: 'PropertySafetyOutlined',
    path: '/home/authority',
    children: [
      {
        name: '页面权限',
        path: '/pageAuthority',
      },
      {
        name: '角色权限',
        path: '/characterAuthority',
        icon: 'SendOutlined',
      },
      {
        name: '子路由',
        path: '/child',
        children: [
          {
            name: "路由1",
            path: '/routerTest1',
            icon: 'SendOutlined',
          },
          {
            name: '路由2',
            path: '/routerTest2',
            icon: 'SendOutlined',
          }
        ]
      }
    ]
  }
]

interface SideBar{
  name: string;
  children?: Array<SideBar>,
  [propName: string]: any;
}

interface Icons { // 处理icon的类型
  [PropName: string]: any
}

const getIcons = (str: string, Icons: Icons) => {
  const TestBankOutlined = Icons[str]
  return <TestBankOutlined />
}

const sideBarTree = (menuArr: SideBar[]) => {
  if(menuArr && menuArr.length) {
    return menuArr.map((item, index) => {
      return (
        item.children 
        ? 
        <SubMenu className="home-menu" popupClassName="home-sider" key={ item.path } icon={ item.icon ? getIcons(item.icon, Icons) : '' } title={ item.name }>
          { sideBarTree(item.children) }
        </SubMenu> : <Menu.Item className="home-menu-item" icon={ item.icon ? getIcons(item.icon, Icons) : '' } key={ item.path }>{ item.name }</Menu.Item>
      )
    })
  } else {
    return null
  }
}

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()


  const clickMenu = (item: any) => {
    const { keyPath = [] } = item
    const path = keyPath.reverse().join('')
    console.log(3333333, path, keyPath)
    history.push(path)
  }

  return (
    <Layout className="home-wrapper">
      <Sider className="home-sider" trigger={ null } collapsible collapsed={ collapsed } >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} onClick={ clickMenu } className="home-menu">
          {
            sideBarTree(menu)
          }
        </Menu>
      </Sider>
      <Layout>
        <Header className="home-header" onClick={ () => { setCollapsed(!collapsed) } }>
          <div className="home-operator flex-center">
            { collapsed ? <MenuUnfoldOutlined className="home-operator-icon"/> : <MenuFoldOutlined  className="home-operator-icon"/> }
          </div>
          <Breadcrumb
          routes={routes}
          >
          </Breadcrumb>
        </Header>
        <Content className="home-content">
          <Router>
            <RouterSwitch>
              <Route path="/home/index" component={ HomeIndex }></Route>
              <Route path="/home/doc" component={ Doc }></Route>
              <Route path="/home/guide" component={ Guide }></Route>
              <Route path="/home/authority/pageAuthority" component={ PageAuthority }></Route>
              <Route path="/home/authority/characterAuthority" component={ UserAuthority }></Route>
              <Route path="/home/authority/child/routerTest1" component={ RouterTest1 }></Route>
              <Route path="/home/authority/child/routerTest2" component={ RouterTest2 }></Route>
              <Redirect to="/home/index" from="/home"></Redirect>
            </RouterSwitch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home