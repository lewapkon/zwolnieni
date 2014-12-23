(function(window, undefined) {
    'use strict';
    // TODO: adjust it to work on mobile (low resolution)
    var heightOfFixedHeader = -10, // for layouts with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        scrollTime = 1000,
        links = document.getElementsByTagName('a');

    console.log(links);

    Array.prototype.forEach.call(links, function(link) {
        var href = link.attributes.href;
        if (checkIfHrefIsCorrect(href)) {
            link.addEventListener('mousedown', function() {
                var href = this.attributes.href.value.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#') + 1),
                    element = document.getElementById(id);
                if (typeof element !== 'undefined' && element !== null) {
                    if(window.history && typeof window.history.pushState === 'function') {
                        window.history.pushState({}, undefined, url+'#'+id); // changes URL
                    }
                    smoothScroll(element, scrollTime);
                }
            });
        }
    });

    function checkIfHrefIsCorrect(href) {
        if (typeof href !== 'undefined' && href !== null) {
            var hrefString = href.value.toString();
            if (hrefString.length > 1 && hrefString.indexOf('#') !== -1) {
                return true;
            }
        }
        return false;
    }

    // ease-in-out
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    function smoothScroll(element, scrollTime) {
        var start = getScrollTopDocument(),
            end = getScrollTopElement(element),
            startTime = Date.now(),
            frame;

        end = end < 0 ? 0 : end;

        var step = function() {
            var time = Date.now();
            var elapsed = (time - startTime) / scrollTime;
            elapsed = elapsed > 1 ? 1 : elapsed;

            var value = ease(elapsed);
            var c = start + ( end - start ) * value;

            window.scrollTo(0, c);

            if (c === end) {
                start = end = undefined;
                return;
            }

            frame = requestAnimationFrame(step);
        };

        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(step);
    }

    function getScrollTopElement(e) {
        var top = heightOfFixedHeader * -1;

        while (typeof e.offsetParent !== 'undefined' && e.offsetParent !== null)
        {
            top += e.offsetTop + (e.clientTop !== null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        
        return top;
    }
    
    function getScrollTopDocument() {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    }
})(window);