import * as React from 'react'
import { lazy,Suspense } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { rootRouter } from 'router/routeConfig'
const Login = lazy(() => import('pages/login'))
import SuspenseLoading from 'pages/components/suspenseLoading'
import { getStorage } from 'lib/untils'

const RouterConfig = () => {
  const sessionId = getStorage('sessionId', '')
  return (
    <Router>
      <Suspense fallback={ <div></div> }>
        <Switch>
          <Route path="/login" component={ Login }></Route>
          {
            rootRouter.map((route, i) => (
              route.redirect 
              ? <Redirect key={route.path || i} to={ route.to } from={ route.from }></Redirect> 
              : <Route key={route.path || i} path={ route.path } component={ route.component }></Route>
            ))
          }
          {/* {
            rootRouter.map((route, i) => (
              sessionId ? route.redirect 
              ? <Redirect key={route.path || i} to={ route.to } from={ route.from }></Redirect> 
              : <Route key={route.path || i} path={ route.path } component={ route.component }></Route>
              : <Redirect key={i} to="/login"></Redirect>
            ))
          } */}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig
