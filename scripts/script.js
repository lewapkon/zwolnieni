!function(e,t){"use strict";function n(e){if("undefined"!=typeof e&&null!==e){var t=e.value.toString();if(t.length>1&&-1!==t.indexOf("#"))return!0}return!1}function o(e){return.5*(1-Math.cos(Math.PI*e))}function r(n,r){var s,c=i(),u=a(n);u=0>u?0:u;var l=Date.now(),f=function(){var n=Date.now(),a=(n-l)/r;a=a>1?1:a;var i=o(a),d=c+(u-c)*i;return e.scrollTo(0,d),d===u?void(c=u=t):void(s=requestAnimationFrame(f))};s&&cancelAnimationFrame(s),s=requestAnimationFrame(f)}function a(e){for(var t=-1*s;"undefined"!=typeof e.offsetParent&&null!==e.offsetParent;)t+=e.offsetTop+(null!==e.clientTop?e.clientTop:0),e=e.offsetParent;return t}function i(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}var s=0,c=1500,u=document.getElementsByTagName("a");console.log(u),Array.prototype.forEach.call(u,function(o){var a=o.attributes.href;n(a)&&o.addEventListener("mousedown",function(){var n=this.attributes.href.value.toString(),o=n.substr(0,n.indexOf("#")),a=n.substr(n.indexOf("#")+1),i=document.getElementById(a);"undefined"!=typeof i&&null!==i&&(e.history&&"function"==typeof e.history.pushState&&e.history.pushState({},t,o+"#"+a),r(i,c))})})}(window),/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
function(){"use strict";function e(){r.classList.remove("open"),a.classList.remove("open"),o.classList.remove("open")}function t(){r.classList.toggle("open"),a.classList.toggle("open"),o.classList.toggle("open"),o.classList.add("opened")}var n=document.querySelector.bind(document),o=n(".navdrawer-container"),r=document.body,a=n(".app-bar"),i=n(".menu"),s=n("main");s.addEventListener("click",e),i.addEventListener("click",t),o.addEventListener("click",function(t){("A"===t.target.nodeName||"LI"===t.target.nodeName)&&e()})}();