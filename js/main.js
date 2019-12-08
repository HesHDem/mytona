// function initMap() {
//     var coordinates = {lat: 59.913089, lng: 30.331965},
    
//     map = new google.maps.Map(document.getElementById("#map"), {
//         center: coordinates,
//         zoom: 16,
//         disableDefaultUI: boolean,
//         scrollwheel: boolean
//     });

//     image = "images/marker-map.svg",
//     marker = new google.maps.Marker({
//         position: coordinates,
//         map: map,
//         icon: image
//     });
// }

$(function () {

	$('.header-slider__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 900,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		draggable: false,
        accessibility: 'boolean',
        prevArrow: '<i class="fas slide-btn slide-btn_left fa-angle-left"></i>',
        nextArrow: '<i class="fas slide-btn slide-btn_right fa-angle-right"></i>',
        asNavFor: '.header-slider__slider-menu',
		responsive: [
			{
                breakpoint: 992,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
                	dots: false,
                	swipe: true
                }
            }
        ]
	});

	$('.header-slider__slider-menu').slick({
        slidesToShow: 5,
        asNavFor: '.header-slider__slider',
        centerMode: false,
        accessibility: 'boolean',
        focusOnSelect: true
    });

	$(".category-news").not(":first").hide();
	$(".tab-news").click(function() {
	    $(".tab-news").removeClass("active").eq($(this).index()).addClass("active");
	    $(".category-news").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".category-vacancy").not(":first").hide();
	$(".tab-vacancy").click(function() {
	    $(".tab-vacancy").removeClass("active").eq($(this).index()).addClass("active");
	    $(".category-vacancy").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});