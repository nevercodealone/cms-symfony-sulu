(function($) {
    "use strict";
    $(function () {
        $('.accordion .panel .panel-heading').on('click', function() {
            var accor = $(this).closest('.accordion');
            var accor_panel = $(this).parent();
            if (accor_panel.hasClass('active')){
                accor_panel.removeClass('active');
            } else{
                if ($('.panel-title a.accordion-toggle').hasClass('collapsed')) {
                    $('.panel', accor).removeClass('active');
                    accor_panel.addClass('active');
                } else{
                    accor_panel.removeClass('active');
                }
            }
        });
    });

})(jQuery);