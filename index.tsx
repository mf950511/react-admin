import Route from './src/router/route'
import { render } from 'react-dom'
import * as React from 'react'
import './src/common/css/index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducer/index'

const store = createStore(reducer, { } )

const renderDom = (Component: any) => {
  return render(
    <Provider store={ store }>
      <Component/>
    </Provider>
  , document.querySelector('#app'))
}

renderDom(Route)



