(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(10),c=(r.useEffect,function(e,t){var n=Object(o.b)();return[Object(o.c)((function(e){return e.normalReducer}))[e]||t,function(t){n({type:"normal",payload:{key:e,value:t}})}]})},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="SET_MENU"},22:function(e,t,n){"use strict";var r=n(9),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-t.payload;default:return e}};function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={messages:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return{messages:[].concat(c(e.messages),[t.payload])};case"DELETE_MESSAGE":return{messages:e.messages.filter((function(e){return e.timestamp!==t.meta.timestamp}))};default:return e}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={collapsed:!1},m=n(7);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=m.c,O=[{id:0,complete:!1,text:"好好看"},{id:1,complete:!1,text:"好好学"},{id:2,complete:!0,text:"欢迎来到德莱联盟"}],j=n(21),w=[],E=Object(r.b)({numberReducer:o,chatReducer:u,normalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;if("normal"===t.type){var n=t.payload,r=n.key,o=n.value;return s(s({},e),{},f({},r,o))}return e},todosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case m.a:var r=n.id,o=n.text,c=n.complete;return[].concat(b(e),[{id:r,text:o,complete:c}]);case m.e:return e.map((function(e){return e.id===n.id?h(h({},e),{},{complete:!e.complete}):e}));default:return e}},filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case m.c:case m.b:case m.d:return t.payload;default:return e}},menuReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.a:return t.menu;default:return e}}}),A=Object(r.c)(E);t.a=A},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));var r=n(0),o=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,39))})),c=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(12),n.e(15)]).then(n.bind(null,40))})),i=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(10)]).then(n.bind(null,41))})),a=Object(r.lazy)((function(){return n.e(19).then(n.bind(null,42))})),u=Object(r.lazy)((function(){return n.e(16).then(n.bind(null,43))})),l=Object(r.lazy)((function(){return n.e(17).then(n.bind(null,44))})),s=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,47))})),f=Object(r.lazy)((function(){return n.e(14).then(n.bind(null,45))})),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(3),n.e(11)]).then(n.bind(null,48))})),m=[{component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5)]).then(n.bind(null,38))})),path:"/login"},{component:d,path:"/home"},{component:Object(r.lazy)((function(){return n.e(18).then(n.bind(null,46))})),path:"/test"},{component:f,path:"/error"},{component:o,path:"/doc"},{component:c,path:"/guide"},{component:i,path:"/pageAuthority"},{component:a,path:"/characterAuthority"},{component:u,path:"/routerTest1"},{component:l,path:"/routerTest2"},{to:"/home",from:"/",redirect:!0}],p=[{component:s,path:"/home/index"},{component:o,path:"/home/doc"},{component:c,path:"/home/guide"},{component:i,path:"/home/authority/pageAuthority"},{component:a,path:"/home/authority/characterAuthority"},{component:u,path:"/home/authority/child/routerTest1"},{component:l,path:"/home/authority/child/routerTest2"},{to:"/home/authority/child/routerTest1",from:"/home/authority/child",redirect:!0},{to:"/home/authority/pageAuthority",from:"/home/authority",redirect:!0},{to:"/home/index",from:"/home",redirect:!0}]},30:function(e,t,n){},36:function(e,t){!function(e){var t,n,r,o,c,i,a,u='<svg><symbol id="icongouwuchekong" viewBox="0 0 1028 1024"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z" fill="#34BFA3" ></path></symbol><symbol id="iconqian" viewBox="0 0 1024 1024"><path d="M504.954 1023.366c-278.057 0-503.461-225.452-503.461-503.46 0-278.058 225.404-503.46 503.46-503.46 278.01 0 503.462 225.402 503.462 503.46 0 278.008-225.452 503.46-503.461 503.46z m0-943.988c-243.294 0-440.527 197.234-440.527 440.528 0 243.293 197.233 440.48 440.527 440.48 243.294 0 440.48-197.187 440.48-440.48 0-243.294-197.186-440.528-440.48-440.528z m31.467 755.191h-62.934V677.19H284.691v-62.884h188.796v-94.399H284.691v-62.934h153.598L284.206 239.326l53.964-34.133 156.022 220.313h35.733l139.488-208.531 52.315 35.006-137.163 204.99h140.653v62.935H542.481l-6.061 9.017v85.382h188.797v62.884H536.421v157.38z" fill="#F4516C" ></path></symbol><symbol id="iconxiaoxi" viewBox="0 0 1024 1024"><path d="M837.818182 23.272727H186.181818C83.781818 23.272727 0 107.054545 0 207.127273v525.963636c0 102.4 83.781818 183.854545 186.181818 183.854546h158.254546l90.763636 58.181818c23.272727 13.963636 48.872727 23.272727 76.8 23.272727s53.527273-6.981818 76.8-23.272727l90.763636-58.181818H837.818182c102.4 0 186.181818-83.781818 186.181818-183.854546V207.127273C1024 107.054545 940.218182 23.272727 837.818182 23.272727z m93.090909 709.818182c0 51.2-41.890909 90.763636-93.090909 90.763636h-172.218182c-9.309091 0-18.618182 2.327273-25.6 6.981819l-102.4 67.490909c-6.981818 6.981818-16.290909 9.309091-25.6 9.309091s-18.618182-2.327273-25.6-6.981819l-102.4-67.490909c-6.981818-4.654545-16.290909-6.981818-25.6-6.981818H186.181818c-51.2 0-93.090909-41.890909-93.090909-90.763636V207.127273C93.090909 158.254545 134.981818 116.363636 186.181818 116.363636h651.636364c51.2 0 93.090909 41.890909 93.090909 90.763637v525.963636z" fill="#36A3F7" ></path><path d="M512 477.090909m-69.818182 0a69.818182 69.818182 0 1 0 139.636364 0 69.818182 69.818182 0 1 0-139.636364 0Z" fill="#36A3F7" ></path><path d="M279.272727 477.090909m-69.818182 0a69.818182 69.818182 0 1 0 139.636364 0 69.818182 69.818182 0 1 0-139.636364 0Z" fill="#36A3F7" ></path><path d="M744.727273 477.090909m-69.818182 0a69.818182 69.818182 0 1 0 139.636364 0 69.818182 69.818182 0 1 0-139.636364 0Z" fill="#36A3F7" ></path></symbol><symbol id="iconlianxiren15" viewBox="0 0 1024 1024"><path d="M519.4 568.8l-89.2-37.7s-13-13.3-14.8-31.3l0.7-12.6c20.9-14.2 36.7-35.5 46.6-60.7 30-0.8 30.6-73.2 15.7-81 5.2-59 5.1-160.3-131.4-161.7h-2.6C207.9 185.2 207.7 286.6 213 345.6c-14.9 7.7-14.3 80.2 15.7 81 10 25.2 25.7 46.5 46.6 60.7l0.7 12.6c-1.9 18-14.8 31.3-14.8 31.3L172 568.8C51.4 637.3 64.4 771.2 64.4 771.2s61.9 68.6 280.5 68.9h1.4c218.6-0.3 280.5-68.9 280.5-68.9s13.1-133.9-107.4-202.4zM872.4 540.1L800 509.5s-10.5-10.8-12-25.5l0.5-10.2c17-11.5 29.8-28.8 37.9-49.3 24.4-0.6 24.8-59.4 12.8-65.7 4.2-47.8 4.1-130.1-106.6-131.2h-2.2c-110.8 1.1-110.9 83.3-106.6 131.2-12.1 6.3-11.6 65.1 12.8 65.7 8.1 20.4 20.9 37.7 37.9 49.3l0.5 10.2c-1.5 14.6-12 25.5-12 25.5l-74.6 31.3s53.8 38.5 78.5 91.1c26.8 56.9 29.9 127.5 29.9 127.5s20.7 0.8 34.3 0.9h1.1c177.5-0.2 227.7-55.9 227.7-55.9s10.3-108.8-87.5-164.3z" fill="#40C9C6" ></path></symbol></svg>';if((t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss")&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}function l(){i||(i=!0,o())}n=function(){var e,t,n,r,o,c=document.createElement("div");c.innerHTML=u,u=null,(e=c.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t=e,(n=document.body).firstChild?(r=t,(o=n.firstChild).parentNode.insertBefore(r,o)):n.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(r=function(){document.removeEventListener("DOMContentLoaded",r,!1),n()},document.addEventListener("DOMContentLoaded",r,!1)):document.attachEvent&&(o=n,c=e.document,i=!1,(a=function(){try{c.documentElement.doScroll("left")}catch(e){return void setTimeout(a,50)}l()})(),c.onreadystatechange=function(){"complete"==c.readyState&&(c.onreadystatechange=null,l())})}(window)},37:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(0),c=(n(30),n(10)),i=n(20),a=n(2),u=n(19),l=n(24);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}o.useState;var d=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5)]).then(n.bind(null,38))})),m=function(){s(Object(u.a)("sessionId",""),1)[0];return o.createElement(i.a,null,o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(a.d,null,o.createElement(a.b,{path:"/login",component:d}),l.b.map((function(e,t){return e.redirect?o.createElement(a.a,{key:e.path||t,to:e.to,from:e.from}):o.createElement(a.b,{key:e.path||t,path:e.path,component:e.component})})))))},p=function(){return o.createElement(m,null)},h=n(22);n(36);r.render(o.createElement(c.a,{store:h.a},o.createElement(p,null)),document.querySelector("#app"))},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return a}));var r="SHOW_ALL",o="SHOW_ACTIVE",c="SHOW_COMPLETED",i="ADD_TODO",a="TOGGLE_TODO"}},[[37,7,8]]]);