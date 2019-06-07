$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

