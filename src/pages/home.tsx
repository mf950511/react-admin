import * as React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
const { Header, Sider, Content } = Layout
const { useState } = React
import '@/common/css/home.less'
import { Route, Redirect, useHistory,HashRouter as Router, Switch as RouterSwitch, useLocation } from 'react-router-dom'
import Doc from 'pages/doc'
import Guide from 'pages/guide'
import PageAuthority from 'pages/pageAuthority'
import UserAuthority from 'pages/userAuthority'
import RouterTest1 from 'pages/routerTest'
import RouterTest2 from 'pages/routerTest2'
import HomeIndex from 'pages/homeIndex'
import LeftMenu from './components/menu'
import BreadCrumb from './components/breadCrumb'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useNormalDispatchEffect } from 'pages/effect/reducer'
import Events from 'lib/events'
import { post } from 'api/request'
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';


const Home = () => {
  const [inProp, setInProp] = useState(false);
  const location = useLocation()
  const history = useHistory()
  // 切换侧边栏收起状态
  const [collapsed, setCollapsed] = useNormalDispatchEffect('collapsed')


  // 切换菜单收起状态
  const collapseMenu = () => {
    setCollapsed(!collapsed)
    Events.$emit('home-chart-resize')
  }

  // 选择右侧下拉框操作
  const selectDrop = (e: any) => {
    const { key } = e
    switch(key) {
      case 'logout':
        post('/api/user/logout').then(res => {
          history.push('/login')
        })
        return
      default:
        history.push(key)
    }
  }

  
  // 右上角下拉框
  const dropdownMenu = (
    <Menu onClick={ selectDrop }>
      <Menu.Item key="/home">
        首页
      </Menu.Item>
      <Menu.Item key="/login">
        个人中心
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout className="home-wrapper">
      <Sider className="home-sider" breakpoint="lg" collapsedWidth="0" zeroWidthTriggerStyle={{ display: 'none' }} collapsible={true} onBreakpoint={ (state: boolean) => { setCollapsed(state) } } collapsed={ collapsed } >
        <LeftMenu/>
      </Sider>
      <Layout>
        <Header className="home-header">
          <div className="home-operator flex-center" onClick={ collapseMenu }>
            { collapsed ? <MenuUnfoldOutlined className="home-operator-icon"/> : <MenuFoldOutlined  className="home-operator-icon"/> }
          </div>
          <BreadCrumb/>
          <div className="dropdown">
            <Dropdown overlay={dropdownMenu} placement="bottomLeft" arrow>
              <span>哈哈哈</span>
            </Dropdown>
          </div>
        </Header>
        <Content className="home-content">
          <Router>
            <TransitionGroup>
              <CSSTransition
              in={inProp}
              key={location.pathname}
              classNames="route"
              timeout={300}
              >
                <RouterSwitch location={location}>
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