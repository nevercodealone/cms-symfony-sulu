(function($) {
    "use strict";
    $(function(){
        // efect button list - grid for page courses
        $('.btn-list-grid .btn-grid').click(function(){
            //alert('true');
            if ($('.style-show').hasClass('style-list')){
                $('.style-show').removeClass('style-list');
                $('.style-show').addClass('style-grid');
                $('.btn-list-grid .btn-grid').parent().addClass('active');
                $('.btn-list-grid .btn-list').parent().removeClass('active');
            }
        });

        $('.btn-list-grid .btn-list').click(function(){
            //alert('false');
            if ($('.style-show').hasClass('style-grid')){
                $('.style-show').removeClass('style-grid');
                $('.style-show').addClass('style-list');
                $('.btn-list-grid .btn-grid').parent().removeClass('active');
                $('.btn-list-grid .btn-list').parent().addClass('active');
            }
        });
    });

})(jQuery);