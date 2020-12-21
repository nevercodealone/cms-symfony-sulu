(function($) {
    "use strict";
    $(function(){
        // AMIMATED NUMBER
        $('.progress-bar-number').appear(function(){
            setTimeout(function(){
                $('.progress-bar-number .num').countTo();
            },1000);
        });

        $('.pricing').appear(function(){
            setTimeout(function(){
                $('.pricing .inner-number').countTo();
            },1000);
        });
        // -------------------------------------//
        // WFECT FOR SECTION PRICING
        if ($(window).width() > 600) {
            $('.pricing-widget').hover( function () {
                $('.pricing').find('.pricing-widget.main').removeClass('active');
            }, function () {
                $('.pricing-widget.main').addClass('active');
            });
        }
        else {
            $('.pricing').find('.pricing-widget.main').removeClass('active');
        }
        // -------------------------------------//

        // INITIALIZE ISOTOPE WHEN NEWTAB ACTIVE
        $('.picture-gallery-wrapper a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

    });

    $(window).load(function() {

        // GALLERY ISSOTOPE
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        // -------------------------------------//
        // SHOW IMAGE GALLERY
        $(".fancybox-button").fancybox({
            prevEffect		: 'none',
            nextEffect		: 'none',
            closeBtn		: false,
            helpers		: {
                title	: { type : 'inside' },
                buttons	: {}
            }
        });
        // -------------------------------------//
        // SET WIDTH - HEIGHT FOR LOADING
        $('.body-2').width($(window).width());
        $('.body-2').height($(window).height());
        // LOADING FOR HOMEPAGE
        setTimeout(function() {
            $('.body-2').removeClass('loading');
            $('.body-2').addClass('loaded');
        }, 800);

    });

})(jQuery);