(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{46:function(t,r,e){"use strict";e.r(r);var n=e(0);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return e}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var i=n.useState;r.default=function(){var t=o(i(0),2),r=t[0],e=t[1];return n.createElement("div",null,n.createElement("p",null,"you clicked123231 ",r," times"),n.createElement("button",{onClick:function(){return e(r+1)}}," 点我哦"))}}}]);