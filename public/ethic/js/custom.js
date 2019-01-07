jQuery(window).on('load resize', function() {
    var $heightElement = jQuery('.tz-training-images').height();
    var $heightAuthor  = jQuery('.tz-single-author').height();

    var $heightBanner        = jQuery('.tz-items').height();
    var $heightContentBanner = jQuery('.tz-banner-content').height();
    var $topContentBanner  =  ($heightBanner - $heightContentBanner) / 2;
    var AnimateTimer= null;
    if (AnimateTimer) clearTimeout(AnimateTimer);
    AnimateTimer = setTimeout(function(){
        var $heightText    = jQuery('.tz-training-content').height();
        var $padding       = ( $heightElement - $heightText ) / 2;
        jQuery('.tz-training-content').css("top",$padding+'px');
    },100);


    if(jQuery('.tz-header-2').length > 0 || jQuery('.tz-header-4').length > 0 || jQuery('.tz-header-6').length > 0){
        jQuery('.tz-banner-content').css('top',$topContentBanner);
        jQuery('.tz-button-right').css('top','40%');
        jQuery('.tz-button-left').css('top','40%');
    }

});

$(window).on('load resize scroll', function() {
    "use strict";

    var $width_Windows = jQuery(this).width(); // This is width of windows

/*  Method for scroll Header 01 */
    if(jQuery(this).scrollTop() > 0){
        jQuery('.tz-header-1').addClass('tz-header-eff');
    }else{
        jQuery('.tz-header-1').removeClass('tz-header-eff');
    }

/*  Method for scroll Header Home01 */
    var $affixTopBanner01 = jQuery('.tz-banner .tz-items').height();
    var $heightHeaderHome01 = jQuery('.tz-header-home-1').height();
    if(jQuery('.tz-header-home-1').length > 0){
        if(jQuery(this).scrollTop() > ($affixTopBanner01 - $heightHeaderHome01)){
            jQuery('.tz-header-home-1').addClass('affix-eff');
            jQuery('.tz-banner-style1').css('z-index','99999');
            if(jQuery('.affix-top').length > 0) {
                jQuery('.affix-top').affix({
                    offset: { top: $affixTopBanner01}
                });
            }
        }
        else{
            jQuery('.tz-header-home-1').removeClass('affix-eff');
            jQuery('.tz-banner-style1').css('z-index','1');
        }
    }

/*  Method for scroll Header Home-02 */
    if(jQuery('.tz-header-2').length > 0){

        if(jQuery(this).scrollTop() >= 30){
            jQuery('.tz-header-2').addClass('tz-header-2-eff')
            jQuery('.tz-banner-style2').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-2').removeClass('tz-header-2-eff')
            jQuery('.tz-banner-style2').css('z-index','1');
        }
    }

    /*  Method for scroll Header Home-03 */
    if(jQuery('.tz-header-3').length > 0){
        if(jQuery(this).scrollTop() > ($height_Tz_Sign_In + 30)){
            jQuery('.tz-banner').css('z-index','99999');
            jQuery('.tz-header-3').addClass('tz-header-3-eff');
        }
        else{
            jQuery('.tz-banner').css('z-index','1');
            jQuery('.tz-header-3').removeClass('tz-header-3-eff');
        }
    }

    /*  Method for scroll Header Home-04 */

    if(jQuery('.tz-header-4').length > 0){
        if(jQuery(this).scrollTop() > 0 ){
            jQuery('.tz-banner').css('z-index','99999');
            jQuery('.tz-header-4').addClass('tz-header-4-eff');

        }else{
            jQuery('.tz-banner').css('z-index','1');
            jQuery('.tz-header-4').removeClass('tz-header-4-eff');
        }
    }

    /*  Method for scroll Header Home-04 */

    if(jQuery('.tz-header-5').length > 0){
        if(jQuery(this).scrollTop() > 0){
            jQuery('.tz-header-5').addClass('tz-header-5-eff');
            jQuery('.tz-banner').css('z-index','99999');
        }else{
            jQuery('.tz-header-5').removeClass('tz-header-5-eff');
            jQuery('.tz-banner').css('z-index','1');
        }
    }
    /*  Method for scroll Header Home-06 */

    if(jQuery('.tz-header-6').length > 0){
        if(jQuery(this).scrollTop() > ($height_Tz_Sign_In + 30)){
            jQuery('.tz-header-6').addClass('tz-header-6-eff')
            jQuery('.tz-banner').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-6').removeClass('tz-header-6-eff')
            jQuery('.tz-banner').css('z-index','1');
        }
    }
    /*  Method for scroll Header Home-07 */

    if(jQuery('.tz-header-7').length > 0){
        if(jQuery(this).scrollTop() > 0){
            jQuery('.tz-header-7').addClass('tz-header-7-eff')
            jQuery('.tz-banner').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-7').removeClass('tz-header-7-eff')
            jQuery('.tz-banner').css('z-index','1');
        }
    }

})

$( window ).on( "load", function() {
    /* Method for Pre-Loading */
    "use strict";

    $('.loading-page').remove();

    $('.tz-slider-banner').owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        navigation: true, // Show next and prev buttons
        slideSpeed:400,
        paginationSpeed:800,
        rewindSpeed:1000,
        stopOnHover: false,
        singleItem: true,
        autoplay: 8000,
    });

    $(".tz-button-left").on('click',function(){
        $(".tz-slider-banner").trigger('owl.prev');
    }) ;
    $(".tz-button-right").on('click',function(){
        $(".tz-slider-banner").trigger('owl.next');
    }) ;

    $('.tz-tab-slider').owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        navigation: true, // Show next and prev buttons
        slideSpeed:400,
        paginationSpeed:800,
        rewindSpeed:1000,
        stopOnHover: false,
        singleItem: true,
        autoplay: false
    });

    var $heightElement = jQuery('.tz-training-images').height();
    var $heightBanner        = jQuery('.tz-items').height();
    var $heightContentBanner = jQuery('.tz-banner-content').height();
    var $topContentBanner  =  ($heightBanner - $heightContentBanner) / 2;
    var AnimateTimer= null;
    if (AnimateTimer) clearTimeout(AnimateTimer);
    AnimateTimer = setTimeout(function(){
        var $heightText    = jQuery('.tz-training-content').height();
        var $padding       = ( $heightElement - $heightText ) / 2;
        jQuery('.tz-training-content').css("top",$padding+'px');
    },100);

    jQuery(".tz-event-wrapper").owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    jQuery(".tz-last-event-prev").on('click',function(){
        jQuery(".tz-event-wrapper").trigger('owl.prev');
    }) ;
    jQuery(".tz-last-event-next").on('click',function(){
        jQuery(".tz-event-wrapper").trigger('owl.next');
    }) ;

    jQuery('.tz-banner-content').css('top',$topContentBanner);
    jQuery('.tz-button-right').css('top','40%');
    jQuery('.tz-button-left').css('top','40%');

    jQuery('#tz-sidemenu a').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('tz-open')) {
            // do nothing because the link is already open
        } else {
            var oldcontent = $('#tz-sidemenu a.tz-open').attr('href');
            var newcontent = $(this).attr('href');

            $(oldcontent).fadeOut('fast', function(){
                $(newcontent).fadeIn().removeClass('tz-hidden');
                $(oldcontent).addClass('tz-hidden');
            });

            $('#tz-sidemenu a').removeClass('tz-open');
            $(this).addClass('tz-open');
        }
    });
 });











