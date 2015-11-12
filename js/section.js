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

	$('.fixed-menu-nav-trigger').on('click', function(e){
		$('.fixed-menu-nav').toggleClass('opened');
		e.stopPropagation();
		e.preventDefault();
	});
	$('.fixed-menu-nav ul li a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.fixed-menu-nav').removeClass('opened').find('.current span').text($(this).text());
	});
	$('.wrapper').on('click', function(e){
		$('.fixed-menu-nav').removeClass('opened');
	});

	$('.service-content-more-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.service-content-detail').toggle();
	});

	$('.form').on('submit', function(e){
		e.preventDefault();
	});

	$('.tab-content').hide();
	$('.tab-content').filter('#'+$('.fixed-menu li.active').attr('rel')).show();
	$('.fixed-menu a').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.tab-content').hide();
		$('.fixed-menu li').removeClass('active');
		$('.tab-content').filter('#'+$(this).parent('li').addClass('active').attr('rel')).show();
	});

	$(document).on('click', '.panel-heading', function(e){
		$(this).siblings('.panel-collapse').collapse('toggle')
	});

});