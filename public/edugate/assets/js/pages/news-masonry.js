$(window).load( function() {


    $('.news-gird-slider').owlCarousel({
        margin: 10,
        loop: true,
        items: 1,
        nav: true,
        navText: ['&#10094;', '&#10095;'],
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
    });

    $('audio,video').mediaelementplayer({
        videoWidth: '100%',
        videoHeight: '100%',
        enableAutosize: true,
        features: ['playpause','current','progress','tracks','volume','fullscreen']
    });

    $('.news-masonry').isotope({
        itemSelector: '.gird-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.gird-item'
        }
    });
    

});
