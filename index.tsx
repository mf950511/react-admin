import Route from './src/router/route'
import { render } from 'react-dom'
import * as React from 'react'
import './src/common/css/index.css'
const renderDom = (Component: any) => {
  return render(<Component/>, document.querySelector('#app'))
}
renderDom(Route)



