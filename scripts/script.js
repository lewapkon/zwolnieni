!function(t,e){"use strict";function n(t){if("undefined"!=typeof t&&null!==t){var e=t.value.toString();if(e.length>1&&-1!==e.indexOf("#"))return!0}return!1}function o(t){return.5*(1-Math.cos(Math.PI*t))}function r(n,r){var a,c=s(),u=i(n),f=Date.now();u=0>u?0:u;var l=function(){var n=Date.now(),i=(n-f)/r;i=i>1?1:i;var s=o(i),d=c+(u-c)*s;return t.scrollTo(0,d),d===u?void(c=u=e):void(a=requestAnimationFrame(l))};a&&cancelAnimationFrame(a),a=requestAnimationFrame(l)}function i(t){for(var e=-1*a;"undefined"!=typeof t.offsetParent&&null!==t.offsetParent;)e+=t.offsetTop+(null!==t.clientTop?t.clientTop:0),t=t.offsetParent;return e}function s(){return t.pageYOffset!==e?t.pageYOffset:document.documentElement.scrollTop!==e?document.documentElement.scrollTop:document.body.scrollTop}var a=-10,c=1e3,u=document.getElementsByTagName("a");console.log(u),Array.prototype.forEach.call(u,function(o){var i=o.attributes.href;n(i)&&o.addEventListener("mousedown",function(){var n=this.attributes.href.value.toString(),o=n.substr(0,n.indexOf("#")),i=n.substr(n.indexOf("#")+1),s=document.getElementById(i);"undefined"!=typeof s&&null!==s&&(t.history&&"function"==typeof t.history.pushState&&t.history.pushState({},e,o+"#"+i),r(s,c))})})}(window),/*!
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
function(){"use strict";function t(){r.classList.remove("open"),i.classList.remove("open"),o.classList.remove("open")}function e(){r.classList.toggle("open"),i.classList.toggle("open"),o.classList.toggle("open"),o.classList.add("opened")}var n=document.querySelector.bind(document),o=n(".navdrawer-container"),r=document.body,i=n(".app-bar"),s=n(".menu"),a=n("main");a.addEventListener("click",t),s.addEventListener("click",e),o.addEventListener("click",function(e){("A"===e.target.nodeName||"LI"===e.target.nodeName)&&t()}),"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(t){return this.slice(0,t.length)===t}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(t){return this.slice(-t.length)===t})}();