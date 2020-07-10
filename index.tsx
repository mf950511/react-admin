import * as ReactDOM from 'react-dom'
import * as React from 'react'
import "common/css/index.css"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './src/store/index'
export const store = createStore(rootReducer)
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



