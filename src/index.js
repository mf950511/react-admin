import _ from 'lodash'
// import printMe from './print.js'
import './index.css'
import Icon from './big.png'
import { cube } from './math.js'

// if("serviceWorker" in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration)
//     }).catch(registrationError => {
//       console.log('SW registered failed: ', registrationError)
//     })
//   })
// } else {
//   console.log(234)
// }

if(process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development library')
  console.log(_.join(['qwe', 'qwe'], '  '))
}

// function getComponent(){
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     let element = document.createElement('div')
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//     return element
//   }).catch(error => 'An error occurred while loading the component')
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })

function component(){
  let dom = document.createElement('div')
  dom.innerHTML = ['Hello webpack', '5 cube is equal' + cube(5)].join('\n\n')
  dom.classList.add('hello')
  dom.classList.add('asd')
  let btn = document.createElement('button')
  btn.innerHTML = 'click me and check the console'
  btn.onclick = (e) => import(/* webpackChunkName: "print" */ "./print").then(module => {
    let print = module.default
    print()
  })
  dom.appendChild(btn)
  return dom

  
}

let element = component()
document.body.appendChild(element)

if(module.hot){
  module.hot.accept('./print.js', function(){
    console.log('Accepting the update printMe module')
    // printMe()
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}