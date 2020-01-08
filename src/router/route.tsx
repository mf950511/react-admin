import Login from '../pages/login'
import Test from '../pages/test2'
import Error from '../pages/error'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import * as React from 'react'

function RouterConfig(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login }></Route>
        <Route path="/a" component={ Test }></Route>
        <Route component={ Error }></Route>
      </Switch>
    </Router>
  )
}
export default RouterConfig
