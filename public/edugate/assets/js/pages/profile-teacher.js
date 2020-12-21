(function($) {
    "use strict";
    $(function(){
        // animate number
        $('.skill-content').appear(function() {
            var bar = $('.progress-bar');
            $(bar).each(function() {
                var bar_width = $(this).attr('aria-valuenow');
                $(this).width(bar_width + '%');
                if (bar_width == 100) {
                    $(this).css({
                        'border-bottom-right-radius': '7px',
                        'border-top-right-radius': '7px'
                    });
                };
            })
        });

    });

})(jQuery);