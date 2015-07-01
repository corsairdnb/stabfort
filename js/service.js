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

	$('.service-content-more-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.service-content-detail').toggle();
	});

});