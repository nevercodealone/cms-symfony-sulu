// JavaScript Document
$(document).ready(function() {

    /* 'use strict'; */

    /************************************************************************************ CAROUSEL SLIDER STARTS */

    $("#nca-form").submit(function(e) {
        e.preventDefault();
        var url = "/api/messages"; // the script where you handle the form input.

        var message = $('#reason').val() + '|' + $('#phone').val() + '|' + $('#message').val();

        var data = JSON.stringify(
            {
                "name":     $('#name').val(),
                "email":    $('#email').val(),
                "message":  message,
                "ip": window.location.host
            }
        );

        $.ajax({
            type: "POST",
            url: url,
            contentType:"application/json",
            dataType:"json",
            data:data,
        }).done(function(data) {
            $("#nca-form").html("<div class='successMessage'>Danke wir melden uns</div>");
        }).fail(function(data) {

        });

        return false;
    });

    var owl = $('.single-image-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.featured-artists-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var owl = $('.albums-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var owl = $('.simple-pics-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.our-equipment-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.medical-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    var owl = $('.construction-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    var owl = $('.wedding-slider');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.wedding-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    var owl = $('.exceptional-dinning-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    var owl = $('.call-to-action-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.spa-services-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.clothing-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.fullwidth-thumbs-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    var owl = $('.spa-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    var owl = $('.food-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    var owl = $('.travel-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    var owl = $('.campus-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    var owl = $('.upcoming-events-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.music-events-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    var owl = $('.what-we-do-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        responsiveClass: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    var owl = $('.shop-carousel-01');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var owl = $('.shop-carousel-related');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.team-style-13-carouel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    var owl = $('.team-style-15-carouel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.blog-images-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.blog-magazine-style-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.fullscreen-slider');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.portfolio-horizontal-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.pictures-carousel-01');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

	var owl = $('.pictures-carousel-02');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	
	var owl = $('.featured-work-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });	
	
	var owl = $('.icon-style-02-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
	var owl = $('.testimonial-carousel-01');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.testimonial-carousel-02');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.testimonial-carousel-03');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.testimonial-carousel-04');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        margin: 12,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.testimonial-carousel-06');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.testimonial-carousel-14');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        margin: 12,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.testimonial-carousel-15');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        margin: 12,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.testimonial-carousel-16');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        margin: 12,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    var owl = $('.partners-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    var owl = $('.pricing-table-11-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        margin: 12,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
	
	$(".h-33-testimonial-carousel").owlCarousel({

      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
	
	
	$(".testimonial-17-carousel").owlCarousel({

      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
	
	$(".h-33-services").owlCarousel({

      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    });
	  
	  $(".h-33-services-mocks").owlCarousel({

      navigation : true,
	  pagination: false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    });


    /************************************************************************************ CAROUSEL SLIDER ENDS */


    /************************************************************************************ DROPDOWN MENU STARTS */

    $('.dropdown-toggle').dropdown();

    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })

    /************************************************************************************ DROPDOWN MENU ENDS */

    /************************************************************************************ SEARCH HOVER TOGGLE STARTS */

    $(function() {
        var $searchlink = $('#searchlink');

        // hover effect
        $searchlink.on('mouseover', function() {
            $(this).addClass('open');
        }).on('mouseout', function() {
            $(this).removeClass('open');
        });

        /** on click effect
        $searchlink.on('click', function(e){
          var target = e ? e.target : window.event.srcElement;
          
          if($(target).attr('id') == 'searchlink') {
            if($(this).hasClass('open')) {
              $(this).removeClass('open');
            } else {
              $(this).addClass('open');
            }
          }
        });**/
    });

    /************************************************************************************ SEARCH HOVER TOGGLE STARTS */

    /************************************************************************************ TOP STICKY NAV STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('nav.transparent').addClass("sticky");
            $('nav.transparent').removeClass("normal");
        } else {
            $('nav.transparent').removeClass("sticky");
            $('nav.transparent').addClass("normal");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('nav.parallax').addClass("sticky");
            $('nav.parallax').removeClass("normal");
        } else {
            $('nav.parallax').removeClass("sticky");
            $('nav.parallax').addClass("normal");
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('nav.fill-white').addClass("sticky");
            $('nav.fill-white').removeClass("normal");
        } else {
            $('nav.fill-white').removeClass("sticky");
            $('nav.fill-white').addClass("normal");
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('nav.fill-black').addClass("sticky");
            $('nav.fill-black').removeClass("normal");
        } else {
            $('nav.fill-black').removeClass("sticky");
            $('nav.fill-black').addClass("normal");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.navigation-26.fill-white-overlay').addClass("sticky");
            $('.navigation-26.fill-white-overlay').removeClass("normal");
        } else {
            $('.navigation-26.fill-white-overlay').removeClass("sticky");
            $('.navigation-26.fill-white-overlay').addClass("normal");
        }
    });

    /************************************************************************************ TOP STICKY NAV ENDS */

    /************************************************************************************ PARALLAX STARTS */

    $('.parallax-1').parallax("50%", 0.1);
    $('.parallax-2').parallax("50%", 0.1);
    $('.parallax-3').parallax("50%", 0.1);
    $('.parallax-4').parallax("50%", 0.1);
    $('.parallax-5').parallax("50%", 0.1);
    $('.parallax-6').parallax("50%", 0.1);
    $('.parallax-7').parallax("50%", 0.1);
    $('.parallax-8').parallax("50%", 0.1);
    $('.parallax-9').parallax("50%", 0.1);
    $('.parallax-10').parallax("50%", 0.1);
    $('.parallax-11').parallax("50%", 0.1);
    $('.parallax-12').parallax("50%", 0.1);
    $('.parallax-13').parallax("50%", 0.1);
    $('.parallax-14').parallax("50%", 0.1);
    $('.parallax-15').parallax("50%", 0.1);
    $('.parallax-16').parallax("50%", 0.1);
    $('.parallax-17').parallax("50%", 2);
    $('.parallax-18').parallax("50%", 0.1);
    $('.parallax-19').parallax("50%", 0);
    $('.parallax-21').parallax("50%", 0.1);
    $('.parallax-22').parallax("50%", 0.1);
    $('.parallax-23').parallax("50%", 0.1);
    $('.parallax-24').parallax("50%", 0.1);
    $('.parallax-25').parallax("50%", 0.1);
    $('.parallax-26').parallax("50%", 0.1);
    $('.parallax-27').parallax("50%", 0.1);
    $('.parallax-28').parallax("50%", 0.1);
    $('.parallax-29').parallax("50%", 0.1);
    $('.parallax-30').parallax("50%", 0.1);
    $('.parallax-31').parallax("50%", 0.1);
    $('.parallax-32').parallax("50%", 0.1);
    $('.parallax-33').parallax("50%", 0.1);
    $('.parallax-34').parallax("50%", 0.1);
    $('.parallax-35').parallax("50%", 0.1);
    $('.parallax-36').parallax("50%", 0.1);
    $('.parallax-37').parallax("50%", 0.1);
    $('.parallax-38').parallax("50%", 0.1);
    $('.parallax-39').parallax("50%", 0.1);
    $('.parallax-40').parallax("50%", 0.1);
    $('.parallax-41').parallax("50%", 0.1);
    $('.parallax-42').parallax("50%", 0.1);
    $('.parallax-43').parallax("50%", 0.1);
    $('.parallax-44').parallax("50%", 0.1);
    $('.parallax-45').parallax("50%", 2);
    $('.parallax-46').parallax("50%", 0.1);
    $('.parallax-47').parallax("50%", 0);
    $('.parallax-48').parallax("50%", 0.1);
    $('.parallax-49').parallax("50%", 0.1);
    $('.parallax-50').parallax("50%", 0);
    $('.parallax-51').parallax("50%", 0.1);
    $('.parallax-52').parallax("50%", 0.1);
    $('.parallax-53').parallax("50%", 0);
    $('.parallax-54').parallax("50%", 0.1);
    $('.parallax-55').parallax("50%", 0.1);
    $('.parallax-56').parallax("50%", 0.1);
    $('.parallax-57').parallax("50%", 0.1);
    $('.parallax-58').parallax("50%", 0.2);
    $('.parallax-59').parallax("50%", 0);
    $('.parallax-60').parallax("50%", 0.1);
    $('.parallax-61').parallax("50%", 0);
    $('.parallax-62').parallax("50%", 0);
    $('.parallax-63').parallax("50%", 2);
    $('.parallax-64').parallax("50%", 0);
    $('.parallax-65').parallax("50%", 0);
    $('.parallax-66').parallax("50%", 0.1);
    $('.parallax-67').parallax("50%", 0.1);
    $('.parallax-68').parallax("50%", 0.1);
    $('.parallax-69').parallax("50%", 0.1);
    $('.parallax-70').parallax("50%", 0.1);
	$('.parallax-71').parallax("50%", 0.1);
    $('.parallax-72').parallax("50%", 0.1);
    $('.parallax-73').parallax("50%", 0.1);
    $('.bgpic').parallax("50%", 2);
    $('.b-img-01').parallax("50%", 0.1);
    $('.b-img-02').parallax("50%", 0.1);
    $('.b-img-03').parallax("50%", 0.1);
    $('.b-img-04').parallax("50%", 0.1);
    $('.b-img-05').parallax("50%", 0.1);
    $('.b-img-06').parallax("50%", 0.1);
    $('.b-img-07').parallax("50%", 0.1);
    $('.b-img-08').parallax("50%", 0.1);
    $('.b-img-09').parallax("50%", 0.1);
    $('.b-img-10').parallax("50%", 0.1);
    $('.parallax-comingsoon-02').parallax("50%", 2);
    $('.texture-1').parallax("50%", 0.1);

    /************************************************************************************ PARALLAX ENDS */

    /************************************************************************************ ACCORDION STARTS */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator2")
            .toggleClass('fa-plus fa-minus');
    }


    function toggleChevron1(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('fa-angle-down fa-angle-right');
    }

    $('.accordion_arrow').on('hidden.bs.collapse', toggleChevron1);
    $('.accordion_arrow').on('shown.bs.collapse', toggleChevron1);

    $('.accordion_plusminus').on('hidden.bs.collapse', toggleChevron);
    $('.accordion_plusminus').on('shown.bs.collapse', toggleChevron);


    /************************************************************************************ ACCORDION ENDS */

    /************************************************************************************ TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup-2').fadeIn();
        } else {
            $('.scrollup-2').fadeOut();
        }
    });

    $('.scrollup-2').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /************************************************************************************ TO TOP ENDS */

    /************************************************************************************ FITVID STARTS */

    $(".fitvid").fitVids();

    /************************************************************************************ FITVID ENDS */

    /************************************************************************************ PRELOADER STARTS */

    jQuery(window).load(function() {

        $('#preloader').fadeOut('slow');

    });

    /************************************************************************************ PRELOADER ENDS */

    /************************************************************************************ DISABLE SCROLL ZOOMING ON GOOGLE MAPS STARTS */

    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);

        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }

    var onMapClickHandler = function(event) {
        var that = $(this);

        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);

        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");

        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.google-map.embed-container').on('click', onMapClickHandler);

    /************************************************************************************ DISABLE SCROLL ZOOMING ON GOOGLE MAPS STARTS */

}); //

/************************************************************************************ MAGNIFIC POPUP STARTS */

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    /*disableOn: 700,*/
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }

});

$('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
        verticalFit: false
    }
});

$('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

$('.simple-ajax-popup-align-top').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
});

$('.simple-ajax-popup').magnificPopup({
    type: 'ajax'
});


$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

/************************************************************************************ MAGNIFIC POPUP ENDS */


/************************************************************************************ REMOVE CLASSES STARTS */

var win = $(this);

if ($(window).width() < 991) {

    $('.row').removeClass('row-height');
    $('.col-top').removeClass('col-height');
    $('.tab-style-05 .row').removeClass('row-height');
    $('.tab-style-05 .row .col-lg-6').removeClass('col-height');
    $('.remove-row-height').removeClass('row-height');
    $('.remove-col-height').removeClass('col-height');
    $('.remove-row-middle').removeClass('col-middle');


} else {

    $('.remove-row-height').addClass('row-height');
    $('.remove-col-height').addClass('col-height');
    $('.remove-row-middle').addClass('col-middle');


}

/************************************************************************************ REMOVE CLASSES STARTS */


/************************************************************************************ FLEX SLIDER STARTS */

$(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 130,
        itemMargin: 0,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        pausePlay: false,
        mousewheel: true,
        sync: "#carousel"
    });
});

/************************************************************************************ FLEX SLIDER ENDS */