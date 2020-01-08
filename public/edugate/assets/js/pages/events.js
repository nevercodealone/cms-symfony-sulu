(function($) {
    "use strict";

    $(function () {
        $('.clock-count-down').countdown('2016/04/24', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div class="row">'
            + '<div class="col-sm-3 col-xs-6">'
            + '<div class="block-time">'
            + '<div class="text-time">Days</div>'
            + '<div class="number-time">%D</div>'
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3 col-xs-6">'
            + '<div class="block-time">'
            + '<div class="text-time">Hours</div>'
            + '<div class="number-time">%H</div>'
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3 col-xs-6">'
            + '<div class="block-time">'
            + '<div class="text-time">Minutes</div>'
            + '<div class="number-time">%M</div>'
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3 col-xs-6">'
            + '<div class="block-time">'
            + '<div class="text-time">Seconds</div>'
            + '<div class="number-time">%S</div>'
            + '</div>'
            + '</div>'
            + '</div>'));
         });
    });

})(jQuery);