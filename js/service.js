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
	$('body').on('click', function(e){
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


	$('.service-menu-trigger').on('click', function(){
		$('.service-menu').toggleClass('opened');
	});
	$('.service-menu-trigger, .service-menu ul li a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	$('body').on('click', function(e){
		$('.service-menu').removeClass('opened');
	});

	$('.breadcrumbs-open-services, .services-popup-less').on('click', function(){
		$('.breadcrumbs-open-services').toggleClass('active');
		$('.services-popup').toggle();
		window.scrollTo(0, 0);
	});

	var serviceNav = $('.service-nav'),
		serviceNavHeight = serviceNav.height(),
		serviceNavTop = parseInt(serviceNav.css('top')),
		footer = $('.footer');

	function fixedNav(){
		if (document.documentElement.clientWidth >= 1260) {
			var serviceNavLeft = Math.floor((document.documentElement.clientWidth - 1240) / 2 + $('.main .section-cnt').width());
			serviceNav.css('left', serviceNavLeft);
		}
	}
	function fixedNavScroll(){
		if (document.documentElement.clientWidth >= 1260) {
			var scrollTop = (function(){
				var scroll = typeof window.scrollY !== 'undefined' ? window.scrollY : window.pageYOffset;
				return typeof scroll !== 'undefined' ? scroll : document.documentElement.scrollTop
			}());
			var bodyHeight = document.body.clientHeight,
				breakpoint = Math.abs(parseInt(bodyHeight) - (parseInt(parseInt(footer.height()) + parseInt(serviceNavHeight) + serviceNavTop + 100)));
			if (scrollTop > breakpoint) {
				serviceNav.css('top', breakpoint - scrollTop-breakpoint + serviceNavHeight + serviceNavTop*2);
			}
			else {
				serviceNav.css('top', serviceNavTop);
			}
		}
	}
	fixedNav();
	fixedNavScroll();
	$(window).resize(function(){
		fixedNav();
		fixedNavScroll();
	});
	$(window).scroll(function(){
		fixedNavScroll();
	});

});