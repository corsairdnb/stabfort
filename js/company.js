$(function(){

	/*
	* данный код предназначен только для демонстрации
	* */

	$('.mobile-icon').on('click', function(){
		$('.top-menu').toggleClass('opened');
	});

	$('.mobile-icon, .top-menu ul li a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	$('.wrapper').on('click', function(e){
		$('.top-menu').removeClass('opened');
	});

	$('#trigger-level-2').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.services-list').addClass('level-2-active');
		$('.services-list-level-2').addClass('active');
		$('.level-1-overlay').show();
	});
	$('.services-list-level-1, .services-list-level-2-back, .services-list-level-2-close').on('click', function(){
		$('.services-list').removeClass('level-2-active level-3-active');
		$('.services-list-level-2').removeClass('active');
		$('.services-list-level-3').removeClass('active');
		$('.level-2-item').removeClass('active');
		$('.level-1-overlay').hide();
	});
	$('.services-list-level-3-close').on('click', function(){
		$('.services-list').removeClass('level-3-active');
		$('.level-2-item').removeClass('active');
		$('.services-list-level-3').removeClass('active');
	});
	$('.tile-list-link, .tile-header-link').on('click', function(e){
		e.preventDefault();
	});

	$('.level-2-item').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.level-2-item').removeClass('active');
		$(this).addClass('active');
		$('.services-list').addClass('level-3-active');
		$('.services-list-level-3').addClass('active');
	});

	$('.services-filter-type-list a').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).parent().addClass('active').siblings().removeClass('active');
	});


	$('.fixed-menu-nav-trigger').on('click', function(){
		$('.fixed-menu-nav').toggleClass('opened');
	});
	$('.fixed-menu-nav-trigger, .fixed-menu-nav ul li a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	$('.wrapper').on('click', function(e){
		$('.fixed-menu-nav').removeClass('opened');
	});

	$('.breadcrumbs-open-services, .services-popup-less').on('click', function(){
		$('.breadcrumbs-open-services').toggleClass('active');
		$('.services-popup').toggle();
		window.scrollTo(0, 0);
	});

	$('.service-content-more-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.service-content-detail').toggle();
	});

	$('.form').on('submit', function(e){
		e.preventDefault();
	});

	if (document.documentElement.clientWidth >= 768) {
		var slider = $('.peppermint');
		slider.Peppermint({
			//transition time when changing slides, ms
			speed: 1000,

			//transition time when changing slides after touch, ms
			touchSpeed: 300,

			//slideshow enabled
			slideshow: true,

			//slideshow interval, ms
			slideshowInterval: 10000,

			//stop slideshow after user interacts with the slider
			stopSlideshowAfterInteraction: false,

			//slide number to start with
			startSlide: 0,

			//use mouse to drag the slider
			mouseDrag: true,

			//don't initialize Peppermint if there's only one slide
			disableIfOneSlide: true,

			//Prefix to be used with Peppermint classes,
			//such as `inactive`, `active`, `mouse`, `drag`, etc.
			//Don't forget to change the stylesheet appropriately!
			cssPrefix: 'peppermint-',

			//show dots
			dots: false,

			//prepend dots to dotsContainer (default is append)
			dotsPrepend: false,

			//Element to contain dots, defaults to Peppermint's root element.
			//Can be anywhere on the page.
			dotsContainer: undefined,

			//element containing slides, defaults to Peppermint's root element
			slidesContainer: undefined,

			//Callback function, runs at slide change.
			//Receives slide number as a parameter.
			onSlideChange: function (a) {
				/*var slide = $('.home-carousel').find('.slide').eq(parseInt(a)-1).find('.slide-content').css('opacity', 0);
				 setTimeout(function(){
				 slide.css('opacity', 1);
				 }, 300, slide);*/
			},

			//Callback function, runs at setup end.
			//Receives total number of slides as a parameter.
			onSetup: undefined
		});
		$('.control-left').on('click', slider.data('Peppermint').prev);
		$('.control-right').on('click', slider.data('Peppermint').next);
	}

	initPhotoSwipeFromDOM('.item-docs');




	$('.tab-content').hide();
	$('.tab-content').filter('#'+$('.fixed-menu li.active').attr('rel')).show();
	$('.fixed-menu a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.tab-content').hide();
		$('.fixed-menu li').removeClass('active');
		$('.tab-content').filter('#'+$(this).parent('li').addClass('active').attr('rel')).show();
	});

	$('.company-common-header-title').on('click', function(e){
		e.preventDefault();
		$('[rel="tab-common"] a').click();
	});

	$('#faq').collapse();

});