(function ($) {
    let block_show = null;
    function fixedFooterShow() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var footerOffsetTop = $('.footer').offset().top;
        var footerHeight = $('.footer').outerHeight();

        if (scrollTop + windowHeight >= footerOffsetTop
            && scrollTop + windowHeight - footerHeight * 2 <= footerOffsetTop + (windowHeight - footerHeight)){
            if (block_show == null || block_show == false) {
                $('.footer-fixed').removeClass('visible')
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $('.footer-fixed').addClass('visible')
            }
            block_show = false;
        }
    }

    $(document).ready(function () {
        $(".scroll-menu.owl-carousel").owlCarousel({
            loop: false,
            items: 10,
            nav: true,
            dots: false,
            autoWidth: true,
            responsive: {
                0: {
                    nav: false,
                    dots: false,
                    margin: 18,
                },
                768: {
                    nav: false,
                    dots: false,
                    margin: 37,
                },
                992: {
                    nav: true,
                    dots: false,
                    margin: 37,
                }
            }
        });

        fixedFooterShow();
    }).on('click', '.js-mobile-menu-open', function (e) {
        e.preventDefault();

        $('.header-mobile-menu').show(400, function () {
            $('body').css({overflow: 'hidden'});
        });
    }).on('click', '.js-mobile-menu-close', function (e) {
        e.preventDefault();

        $('.header-mobile-menu').hide(400, function () {
            $('body').css({overflow: 'visible'});
        });
    });

    $(window).scroll(function () {
        fixedFooterShow();
    });
})
(jQuery);