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
		// fade: true,
		// dots: true,
		// dotsClass: 'slider-dots',
		// pauseOnDotsHover: true,
		// customPaging : function(slider, i) {
		// var thumb = $(slider.$slides[i]).data();
		// return '<button>'+0+(i+1)+'</button>';
		// },
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

	$('.header-slider__slider-menu').slick({ // настройка навигации
        slidesToShow: 5, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.header-slider__slider', // указываем что это навигация для блока выше
        centerMode: false,
        accessibility: 'boolean',
        focusOnSelect: true // указываем что бы слайделось по клику
    });

	// $('.question-block').click(function () {
	// 	$('.question-block').removeClass('active');
	// 	$(this).addClass('active');
	// });

	// $('.btn-mobile-menu').click(function () {
	// 	$('.mobile-menu-block').toggleClass('active');
	// });
});