(function ($) {

    function init() {
        var myLatlng = new google.maps.LatLng(53.464892, -2.285771);
        // If document (your website) is wider than 767px, isDraggable = true, else isDraggable = false
        var isDraggable = $(document).width() > 767 ? true : false;
        var myOptions = {
            zoom: 14,
            //center: myMap,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: isDraggable,
            scrollwheel: false,

        };
        var contentString = '<div id="content">' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var map = new google.maps.Map(document.getElementById('map'), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'edugate',
            infowindow: infowindow
        });
        var contentString = '<div id="content">' +
            '<div class="text-center">' +
            '<h1 id="firstHeading" class="firstHeading">EDUGATE</h1>' +
            '<div class="g-address">Trafford Wharf Road, Manchester M17 1AB, United Kingdom</div>' +
            '<div class="g-phone-num">+44 277 188 8800</div>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        // infowindow.open(map, marker);
        map.setCenter({
            lat: 53.464892,
            lng: -2.285771
        });


        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    google.maps.event.addDomListener(window, 'load', init);

    //END GOOGLE MAP
})(jQuery);