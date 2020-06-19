import Login from '../pages/login'
import Test from '../pages/test2'
import Error from '../pages/error'
import Home from '../pages/home'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import * as React from 'react'

function RouterConfig(){
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={ Login }></Route>
        <Route path="/a" component={ Test }></Route>
        <Route path="/error" component={ Error }></Route>
        <Route path="/home" component={ Home }></Route>
        <Redirect to="/home" from="/"></Redirect>
      </Switch>
    </Router>
  )
}
export default RouterConfig
