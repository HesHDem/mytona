$(function () {

	$('.header__mobile-btn').click(function() {
		$('.header__icon').toggleClass('active');
		$('.header__nav').slideToggle(200);
		$('.header__nav').css('display', 'flex');
	});

	$('.header-slider__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		draggable: false,
        accessibility: 'boolean',
        prevArrow: '<i class="fas slide-btn slide-btn_left fa-angle-left"></i>',
        nextArrow: '<i class="fas slide-btn slide-btn_right fa-angle-right"></i>',
        asNavFor: '.header-slider__slider-menu'
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

	window.onload = function () {
		$('.preloader').fadeOut(200, function() { 
			$('.preloader').remove(); 
		});
	}
});