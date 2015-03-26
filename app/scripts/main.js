/*global $:false, alert:false */
(function () {
  'use strict';

  var navdrawerContainer = $('.navdrawer-container');
  var body = $(document.body);
  var appbarElement = $('.app-bar');
  var menuBtn = $('.menu');
  var main = $('main');

  function closeMenu() {
    body.removeClass('open');
    appbarElement.removeClass('open');
    navdrawerContainer.removeClass('open');
  }

  function toggleMenu() {
    body.toggleClass('open');
    appbarElement.toggleClass('open');
    navdrawerContainer.toggleClass('open');
    navdrawerContainer.addClass('opened');
  }

  main.on('click', closeMenu);
  menuBtn.on('click', toggleMenu);
  navdrawerContainer.on('click', function (event) {
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

  var sourceButton = $('#sourceButton'),
      sourceDiv = $('#source'),
      shown = false;
  sourceButton.on('click', function() {
    if (!shown) {
      sourceDiv.addClass('show');
      sourceButton.html('Ukryj źródła');
      shown = true;
    } else {
      sourceDiv.removeClass('show');
      sourceButton.html('Pokaż źródła');
      shown = false;
    }
  });

  var radioButtons = ['entry.1141694941', 'entry.1296694014', 'entry.188730532', 'entry.1804324450'],
      form = $('#ankieta form')[0];

  $('#ankieta #ss-submit').click(function() {
    var valid = true;
    radioButtons.forEach(function(el) {
      var value = $('input[name="' + el + '"]:checked').val();
      if (typeof value === 'undefined') {
        valid = false;
      }
    });
    if (valid) {
      form.submit();
      $('#ankieta .error').removeClass('display');
      setTimeout(function() {
        $('form')[0].reset();
      }, 300);
      alert('Dziękujemy za wypełnienie ankiety.');
    }
    else {
      $('#ankieta .error').addClass('display');
    }
  });

  /*
  window.addEventListener('touchmove', function(e) {
    if (body.classList.contains('open')) {
      e.preventDefault();
    }
  });
  */
})();
