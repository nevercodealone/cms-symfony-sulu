!function($){

    $(document).ready(function(){

        //inherit from bootstrap (http://www.modernizr.com/)
        if ($.support.transition) {

            var $btn = $('.btn-navbar'),
                $nav = null,
                $fixeditems = null;

            if (!$btn.length){
                return;
            }

            //mark that we have off-canvas menu
            $(document.documentElement).addClass('off-canvas-ready');

            $nav = $('<div class="plazart-mainnav" />').appendTo($('<div id="off-canvas-nav"></div>').appendTo(document.body));
            $($btn.data('target')).clone().appendTo($nav);

            $btn.click (function(e){
                if ($(this).data('off-canvas') == 'show') {

                    hideNav();
                } else {

                    showNav();
                    $('body').append('<a class="exit-cavas" href="#">&nbsp;</a>');
                }

                return false;
            });

            var posNav = function () {
                    var t = $(window).scrollTop();
                    if (t < $nav.position().top) $nav.css('top', 0);
                },

                bdHideNav = function (e) {
                    e.preventDefault();
                    hideNav();
                    return false;
                },

                showNav = function () {
                    $('html').addClass ('off-canvas');

                    $nav.css('top', $(window).scrollTop());
                    wpfix(1);

                    setTimeout (function(){
                        $btn.data('off-canvas', 'show');
                        $('html').addClass ('off-canvas-enabled');
                        $(window).bind('scroll touchmove', posNav);

                        // hide when click on off-canvas-nav
                        $('#off-canvas-nav').bind ('click', function (e) {
                            e.stopPropagation();
                        });

                        $('#off-canvas-nav a').bind ('click', hideNav);
                        $('html').bind ('click', bdHideNav);
                    }, 50);

                    setTimeout (function(){
                        wpfix(2);
                    }, 1000);

                    $('#show').hide();
                },

                hideNav = function () {
                    $(window).unbind('scroll touchmove', posNav);
                    $('#off-canvas-nav').unbind ('click');
                    $('#off-canvas-nav a').unbind ('click', hideNav);
                    $('html').unbind ('click', bdHideNav);

                    $('html').removeClass ('off-canvas-enabled');
                    $btn.data('off-canvas', 'hide');

                    setTimeout (function(){
                        $('html').removeClass ('off-canvas');
                        $('#show').show();
                    }, 600);
                    $('.exit-cavas').remove();

                },

                wpfix = function (step) {
                    // check if need fixed
                    if ($fixeditems == -1){
                        return;// no need to fix
                    }

                    if (!$fixeditems) {
                        $fixeditems = $('body').children().filter(function(){ return $(this).css('position') === 'fixed' });
                        if (!$fixeditems.length) {
                            $fixeditems = -1;
                            return;
                        }
                    }
                    if (step==1) {
                        $fixeditems.css({'position': 'absolute', 'top': $(window).scrollTop() + 'px'});
                    } else {
                        $fixeditems.css({'position': '', 'top': ''});
                    }
                };
        }
    })

}(jQuery);