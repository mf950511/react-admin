import Route from './src/router/route'
import { render } from 'react-dom'
import * as React from 'react'
const renderDom = (Component: any) => {
  return render(<Component/>, document.querySelector('#app'))
}
renderDom(Route)



