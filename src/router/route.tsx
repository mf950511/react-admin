import Login from '../pages/login'
import Test from '../pages/test2'
import Error from '../pages/error'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import * as React from 'react'

function RouterConfig(){
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={ Login }></Route>
        <Route path="/a" component={ Test }></Route>
        <Route path="/error" component={ Error }></Route>
        <Redirect to="/home" from="/"></Redirect>
      </Switch>
    </Router>
  )
}
export default RouterConfig
