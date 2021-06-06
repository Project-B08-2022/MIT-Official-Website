$('.slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    FocusOnSelect: true,
});

$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.slider2').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slider3').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


var $video = $('.control');
var motion = $('.play');
var $support = $('.tour > .row > .col-7');

$support.on('mouseenter', function () {
    $(motion).animate({ left: '900px' }, 'swing', 'swing');
});

$support.on('mouseleave', function () {
    $(motion).animate({ left: '0px' }, 'swing', 'swing');
    $video.get(0).pause();
});



