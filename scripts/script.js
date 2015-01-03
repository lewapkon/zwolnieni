!function(){"use strict";for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),o=Math.max(0,16-(n-e)),i=window.setTimeout(function(){t(n+o)},o);return e=n+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e,t){"use strict";function n(){var e=s();e>=80?l.classList.add("fixed"):l.classList.remove("fixed")}function o(e){if("undefined"!=typeof e&&null!==e){var t=e.value.toString();if(t.length>1&&-1!==t.indexOf("#"))return!0}return!1}function i(e){return.5*(1-Math.cos(Math.PI*e))}function r(n,o){var r,c=s(),u=a(n),d=Date.now();u=0>u?0:u;var l=function(){var n=Date.now(),a=(n-d)/o;a=a>1?1:a;var s=i(a),m=c+(u-c)*s;return e.scrollTo(0,m),m===u?void(c=u=t):void(r=e.requestAnimationFrame(l))};r&&e.cancelAnimationFrame(r),r=e.requestAnimationFrame(l)}function a(e){for(var t=-1*c;"undefined"!=typeof e.offsetParent&&null!==e.offsetParent;)t+=e.offsetTop+(null!==e.clientTop?e.clientTop:0),e=e.offsetParent;return t}function s(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}var c=50,u=1e3,d=document.getElementsByTagName("a");Array.prototype.forEach.call(d,function(n){var i=n.attributes.href;o(i)&&n.addEventListener("click",function(n){n.preventDefault();var o=this.attributes.href.value.toString(),i=o.substr(0,o.indexOf("#")),a=o.substr(o.indexOf("#")+1),s=document.getElementById(a);"undefined"!=typeof s&&null!==s&&(e.history&&"function"==typeof e.history.pushState&&e.history.pushState({},t,i+"#"+a),r(s,u))})});var l=document.getElementById("bar");e.addEventListener("scroll",function(){e.requestAnimationFrame(n)},!1)}(window),/*!
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
function(){"use strict";function e(){i.classList.remove("open"),r.classList.remove("open"),o.classList.remove("open")}function t(){i.classList.toggle("open"),r.classList.toggle("open"),o.classList.toggle("open"),o.classList.add("opened")}var n=document.querySelector.bind(document),o=n(".navdrawer-container"),i=document.body,r=n(".app-bar"),a=n(".menu"),s=n("main");s.addEventListener("click",e),a.addEventListener("click",t),o.addEventListener("click",function(t){("A"===t.target.nodeName||"LI"===t.target.nodeName)&&e()}),"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(e){return this.slice(0,e.length)===e}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(e){return this.slice(-e.length)===e})}();