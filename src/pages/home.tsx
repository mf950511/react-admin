import * as React from 'react'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const { useState } = React
import '@/common/css/home.less'
import { Breadcrumb } from 'antd';
import * as Icons from '@ant-design/icons';
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
    path: '/doc',
  },
  {
    name: '引导页',
    icon: 'SendOutlined',
    path: '/guide',
  },
  {
    name: '权限测试页',
    icon: 'PropertySafetyOutlined',
    path: '/authority',
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
            path: '/route1',
            icon: 'SendOutlined',
          },
          {
            name: '路由2',
            path: '/route2',
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


  const clickMenu = (item: any) => {
    const { keyPath = [] } = item
    console.log(3333333, keyPath.join(''))
    dispatch(push(keyPath.join('')))
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

        </Content>
      </Layout>
    </Layout>
  )
}

export default Home