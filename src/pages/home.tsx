import * as React from 'react'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout
const { useState } = React
import '@/common/css/home.less'
import { Route, Redirect, HashRouter as Router, Switch as RouterSwitch, useLocation } from 'react-router-dom'
import LeftMenu from './components/menu'
import BreadCrumb from './components/breadCrumb'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { normalDispatchEffect } from 'store/normal/effect'
import Events from 'lib/events'
import DropDown from './components/dropDown'
import { homeRouter } from 'router/routeConfig'
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';


const Home = () => {
  const [inProp, setInProp] = useState(false);
  const location = useLocation()
  // 切换侧边栏收起状态
  const [collapsed, setCollapsed] = normalDispatchEffect('collapsed', false)


  // 切换菜单收起状态
  const collapseMenu = () => {
    setCollapsed(!collapsed)
    Events.$emit('home-chart-resize')
  }


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
          <DropDown/>
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
                  {
                    homeRouter.map((route, i) => (
                      route.redirect 
                      ? <Redirect key={route.path || i} to={ route.to } from={ route.from }></Redirect> 
                      : <Route key={route.path || i} path={ route.path } component={ route.component }></Route>
                    ))
                  }
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