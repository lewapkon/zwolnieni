/*!
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
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });

  if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (str){
      return this.slice(0, str.length) === str;
    };
  }
  if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (str){
      return this.slice(-str.length) === str;
    };
  }

  var sourceButton = querySelector('#sourceButton'),
      sourceDiv = querySelector('#source'),
      shown = false;
  sourceButton.addEventListener('click', function() {
    if (!shown) {
      addClass(sourceDiv, 'show');
      //addClass(sourceDiv, 'fadeInDownBig');
      //addClass(sourceDiv, 'animated');
      sourceButton.innerHTML = 'Ukryj źródła';
      shown = true;
    } else {
      removeClass(sourceDiv, 'show');
      sourceButton.innerHTML = 'Pokaż źródła';
      shown = false;
    }
  });

  function addClass(el, className) {
    if (typeof el.classList !== 'undefined' && el.classList !== null) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  /*
  window.addEventListener('touchmove', function(e) {
    if (body.classList.contains('open')) {
      e.preventDefault();
    }
  });
  */
})();
