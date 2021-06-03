// svg icons support ie11
(function () {
    svg4everybody();
})();

// carousel arrows
var navArrows = ['\n    <svg class="icon icon-arrow-prev">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>\n    </svg>', '<svg class="icon icon-arrow-next">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>\n    </svg>'];

// tabs
(function () {
    var tabs = $('.js-tabs');

    tabs.each(function () {
        var thisTabs = $(this),
            nav = thisTabs.find('.js-tabs-link'),
            item = thisTabs.find('.js-tabs-item');
        nav.on('click', function () {
            var thisNav = $(this),
                indexNav = thisNav.index();
            nav.removeClass('active');
            thisNav.addClass('active');
            item.hide();
            item.eq(indexNav).fadeIn();
            initSlider(item.eq(indexNav));
            return false;
        }).first().trigger('click');
    });

    function initSlider(el) {
        var sl = el.find('.js-slider-skills');
        if (!sl.hasClass('owl-loaded')) {
            sl.addClass('owl-loaded');
            sl.owlCarousel({
                items: 2,
                nav: true,
                navElement: 'button',
                navText: navArrows,
                dots: true,
                loop: false,
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1,
                        autoHeight: true
                    },
                    768: {
                        items: 2
                    }
                }
            });
        }
    }
})();

// owl carousel
$(document).ready(function () {
    var slider = $('.js-slider-team');
    slider.owlCarousel({
        items: 1,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: false,
        smartSpeed: 700,
        responsive: {
            0: {
                nav: false,
                dots: true
            },
            768: {
                nav: true,
                dots: false
            }
        }
    });
});

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap'),
        bg = header.find('.js-header-bg'),
        link = $('.js-link');
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        bg.toggleClass('show');
    });
    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
    });
})();

AOS.init();