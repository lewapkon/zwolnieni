(function() {
  'use strict';
  var adsDiv,
      adsFilenames = ['0,500x500.jpg', '1,700x200.jpg', '2,700x300.gif'],
      maxRotation = 0.4; // rad

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function ads() {
    adsDiv = document.getElementById('ads');
    tick();
  }

  function tick() {
    adsDiv.innerHTML = '';
    var d = (getPageHeight() * 0.8 - getLandingHeight()) / adsFilenames.length,
        min = getLandingHeight(),
        max = getLandingHeight() + d;
    shuffleArray(adsFilenames).forEach(function(filename) {
      showAd(filename, min, max);
      min += d;
      max += d;
    });
  }

  function shuffleArray(array) {
    array = array.slice(0); // clones array
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function showAd(adFilename, minHeight, maxHeight) {
    var angle = random(-maxRotation, maxRotation),
        size = parseFilename(adFilename).slice(1, 3),
        realSize = [size[0] * Math.cos(angle) + size[1] * Math.sin(angle),
                    size[0] * Math.sin(angle) + size[1] * Math.cos(angle)],
        top = Math.floor(random(minHeight, maxHeight)),
        left = 0,
        pageWidth = getPageWidth();
    if (realSize[0] < pageWidth) {
      left = Math.floor(random(0, getPageWidth() - realSize[0]));
    }
        
    var el = '<img src="images/bnr/' + adFilename + '" style="position:absolute;left:' + left  + 'px;top:' + top + 'px;width:' + size[0] + 'px;height:' + size[1] + 'px;-webkit-transform:rotate(' + angle + 'rad);transform:rotate(' + angle + 'rad)">';
    console.log(el);
    adsDiv.innerHTML += el;
  }

  function parseFilename(filename) {
    return filename.split(/[,x.]/); // [number, width, height, extension]
  }

  function getPageHeight() {
    return Math.max(getElementSize(document.body, 'Height'), 
                    getElementSize(document.documentElement, 'Height'));
  }

  function getPageWidth() {
    return Math.max(getElementSize(document.body, 'Width'), 
                    getElementSize(document.documentElement, 'Width'));
  }

  function getLandingHeight() {
    var landing = document.getElementById('landing');
    return getElementSize(landing, 'Height');
  }

  function getElementSize(element, direction) {
    var numbers = [element['scroll' + direction],
                   element['offset' + direction],
                   element['client' + direction]];
    return Math.max.apply(null, numbers.map(returnsDefaultValueIfNaN));
  }

  function returnsDefaultValueIfNaN(item) {
    if (item === undefined || typeof item !== 'number' || isNaN(parseFloat(item))) {
      return -Infinity;
    }
    return item;
  }

  docReady(ads);
  window.addEventListener('resize', function() {
    window.requestAnimationFrame(tick);
  }, false);
})();