/*
 * Method resize image
 */
function TzTemplateResizeImage(obj){

    var widthStage;
    var heightStage ;
    var widthImage;
    var heightImage;
    obj.each(function (i,el){
        heightStage = jQuery(this).height();
        widthStage = jQuery (this).width();
        var img_url = jQuery(this).find('img').attr('src');
        var image = new Image();
        image.src = img_url;
        image.onload = function() {
        }
        widthImage = image.naturalWidth;
        heightImage = image.naturalHeight;
        var tzimg	=	new resizeImage(widthImage, heightImage, widthStage, heightStage);
        jQuery(this).find('img').css ({ top: tzimg.top, left: tzimg.left, width: tzimg.width, height: tzimg.height });
    });
}

/*
 * Method portfolio column
 * @variables Desktop
 * @variables tabletportrait
 * @variables mobilelandscape
 * @variables mobileportrait
 */
function tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait){
    var contentWidth    = jQuery('.tz-portfolio').width();
    var numberItem      = 0;
    var newColWidth     = 0;
    var heightElement   = 0;
    var landscape       = 0;
    var portrait        = 0;
    var featureColWidth = 0;
    var widthWindwow = jQuery(window).width();
    if (widthWindwow >= 992) {
        numberItem =  Desktop;
    } else if (  widthWindwow >= 768) {
        numberItem =  tabletportrait ;
    } else if (  widthWindwow >= 480) {
        numberItem =  mobilelandscape ;
    } else if (widthWindwow < 480) {
        numberItem =  mobileportrait ;
    }
    newColWidth    =  Math.floor(contentWidth / numberItem);
    heightElement  =  jQuery('.element').height();
    landscape      =  newColWidth * 2;
    portrait       =  heightElement * 2;

    jQuery('.element').css({
        width: newColWidth + 'px'
    });
    jQuery('.tz-feature-item, .tz-landscape').width(landscape);
    jQuery('.tz-portrait').css('height',portrait+'px');
    var $container  = jQuery('.tz-portfolio') ;
    $container.imagesLoaded(function(){
        $container.isotope({
            masonry:{
                columnWidth: newColWidth
            }
        });

    });
    TzTemplateResizeImage(jQuery('.tz-image-portfolio'));
    TzTemplateResizeImage(jQuery('.tz-item-element'));
    TzTemplateResizeImage(jQuery('.tz-image-item'));
    TzTemplateResizeImage(jQuery('.tz-portfolio-image-height'));
    TzTemplateResizeImage(jQuery('.tz-image-portfolio'));

    var $widthItem = jQuery(window).width();

    if(jQuery('.tz-header-5').length > 0){
        if($widthItem >= 768 && $widthItem < 992){
            jQuery('.tz-portfolio .element').css("width",newColWidth +'px');
        }
    }
}

/*
 * Method resize
 */
jQuery(window).on('load resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout("tz_init(Desktop, tabletportrait, mobilelandscape, mobileportrait)", 100);

});
