import * as React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const { useState } = React
import '@/common/css/home.less'
import { Breadcrumb } from 'antd';
import { 
  BankOutlined, 
  FileTextOutlined,
  SendOutlined,
  PropertySafetyOutlined,
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
  },
  {
    name: '文档',
    icon: 'FileTextOutlined',
  },
  {
    name: '引导页',
    icon: 'SendOutlined',
  },
  {
    name: '权限测试页',
    icon: 'PropertySafetyOutlined',
    children: [
      {
        name: '页面权限',
      },
      {
        name: '角色权限',
      },
      {
        name: '子路由',
        children: [
          {
            name: "路由1"
          },
          {
            name: '路由2'
          }
        ]
      }
    ]
  }
]

const sideBarTree = (arr: object[]) => {
  if(arr && arr.length) {
    return arr.map(item => (
      arr.children 
      ? 
      <SubMenu className="home-menu" popupClassName="home-sider" icon={<PropertySafetyOutlined />} title="权限测试页">
        { sideBarTree(arr.children) }
      </SubMenu> : <Menu.Item className="home-menu-item"></Menu.Item>
    ))
  }
}

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="home-wrapper">
      <Sider className="home-sider" trigger={ null } collapsible collapsed={ collapsed } >
        <Menu theme="dark" mode="inline" className="home-menu">
          {
            menu.map(item => (
              item.children 
              ? 
              <SubMenu className="home-menu" popupClassName="home-sider" icon={<PropertySafetyOutlined />} title="权限测试页">

              </SubMenu> : <Menu.Item className="home-menu-item"></Menu.Item>
            ))
          }
          <Menu.Item className="home-menu-item" icon={ <BankOutlined/> }>
            首页
          </Menu.Item>
          <Menu.Item className="home-menu-item" icon={ <FileTextOutlined /> }>
            文档
          </Menu.Item>
          <Menu.Item className="home-menu-item" icon={ <SendOutlined /> }>
            引导页
          </Menu.Item>
          <SubMenu className="home-menu" popupClassName="home-sider" icon={<PropertySafetyOutlined />} title="权限测试页">
            <Menu.Item className="home-menu-item">
              页面权限
            </Menu.Item>
            <Menu.Item className="home-menu-item">
              角色权限
            </Menu.Item>
            <SubMenu className="home-menu" popupClassName="home-sider" icon={<PropertySafetyOutlined />} title="权限测试页">
              <Menu.Item className="home-menu-item">
                页面权限
              </Menu.Item>
              <Menu.Item className="home-menu-item">
                角色权限
              </Menu.Item>
            </SubMenu>
          </SubMenu>
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