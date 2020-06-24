import * as ReactDOM from 'react-dom'
import * as React from 'react'
import "common/css/index.css"
import { Provider } from 'react-redux'
import App from './App'
import configureStore, { history } from './configStore'
export const store = configureStore()

const render = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <App history={ history }/>
    </Provider>,
    document.querySelector('#app')
  )
}

render()



