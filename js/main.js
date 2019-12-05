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

	$('.slider-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		swipe: false,
        accessibility: 'boolean',
		fade: true,
		arrows: false,
		dots: true,
		dotsClass: 'slider-dots',
		pauseOnDotsHover: true,
		customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data();
		return '<button>'+0+(i+1)+'</button>';
		},
		responsive: [
			{
                breakpoint: 992,
                settings: {
                    swipe: true
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

	$('.question-block').click(function () {
		$('.question-block').removeClass('active');
		$(this).addClass('active');
	});

	$('.btn-mobile-menu').click(function () {
		$('.mobile-menu-block').toggleClass('active');
	});
});