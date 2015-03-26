/*global $:false */
(function () {
  'use strict';

  $(document).ready(function() {
  	$('.video-slider').each(function(i, el) {
  		var videoOne = $(el).find('.video-one')[0],
          videoTwo = $(el).find('.video-two')[0],
          playButton = $(el).find('.play-pause')[0],
          muteButton = $(el).find('.mute')[0],
          fullScreenButton = $(el).find('.full-screen')[0],
          seekBar = $(el).find('.seek-bar')[0];

      function onScreenClick() {
        if (videoOne.paused === true) {
          videoOne.play();
          videoTwo.play();
          $(playButton).html('❙❙');
        } else {
          videoOne.pause();
          videoTwo.pause();
          $(playButton).html('&#9658;');
        }
      }

      $(videoOne).on('click', onScreenClick);
      $(videoTwo).on('click', onScreenClick);
      $(playButton).on('click', onScreenClick);

      $(videoOne).on('ended', function() {
        videoOne.currentTime = 0.1;
        videoOne.play();
        videoTwo.currentTime = 0.1;
        videoTwo.play();
      });

      $(muteButton).on('click', function() {
        if (videoOne.volume > 0) {
          videoOne.volume = 0;
          videoTwo.volume = 0;
          $(muteButton).html('Unmute');
        } else {
          videoOne.volume = 1;
          videoTwo.volume = 1;
          $(muteButton).html('Mute');
        }
      });

      function launchIntoFullscreen(element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }

      function exitFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

      $(fullScreenButton).on('click', function() {
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        if (!fullscreenEnabled) {
          exitFullscreen();
        } else {
          launchIntoFullscreen(el);
        }
      });

      $(seekBar).on('change', function() {
        var time = videoOne.duration * seekBar.value / 100;

        videoOne.currentTime = time;
        videoTwo.currentTime = time;
      });

      $(videoOne).on('timeupdate', function() {
        var value = 100 / videoOne.duration * videoOne.currentTime;

        seekBar.value = value;
      });

      $(seekBar).on('mousedown touchstart', function() {
        videoOne.pause();
        videoTwo.pause();
      });

      $(seekBar).on('mouseup touchend', function() {
        if ($(playButton).html() === '❙❙') {
          videoOne.play();
          videoTwo.play();
        }
      });
  	});
  });
})();