import * as React from 'react'
import { lazy,Suspense } from 'react'
const { useState } = React
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { normalDispatchEffect } from 'store/normal/effect'
import { rootRouter } from 'router/routeConfig'
const Login = lazy(() => import('pages/login'))
import SuspenseLoading from 'pages/components/suspenseLoading'

const RouterConfig = () => {
  const [sessionId] = normalDispatchEffect('sessionId', '')
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
