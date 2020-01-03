(function($) {
    "use strict";
    $(function(){
        // VOTE RANGTING
        $('.stars span a').on('click', function(e){
            e.preventDefault();
            $('.stars span').find('a').removeClass('active');
            $(this).addClass('active');
        });
         // -------------------------------------//
         // SHOW HIDE COMMENT WHEN CLICK BUTTON REALY
         $('div[class*="merge"]').css("display","none");
         $('.reply-1').click(function(event) {
             $('.merge-1').toggle(300);
         });
         $('.reply-2').click(function(event) {
             $('.merge-2').toggle(300);
         });
         $('.reply-2-1').click(function(event) {
             $('.merge-2').toggle(300);
         });
         $('.reply-3').click(function(event) {
             $('.merge-3').toggle(300);
         });


    });

})(jQuery);