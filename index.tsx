import * as ReactDOM from 'react-dom'
import * as React from 'react'
import "common/css/index.less"
import { Provider } from 'react-redux'
import App from './App'
import store from './src/store/index'
require('common/js/iconfont')

const render = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>,
    document.querySelector('#app')
  )
}


render()



