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





	var dialog,
		dialogContext = function(selector){
			return dialog.$modalContent.find(selector);
		};

	$('.breadcrumbs-open-services').on('click', function(){
		//$('.services-popup').toggle();
		//window.scrollTo(0, 0);
		dialog = dialogWindow($('.services-dialog-content').clone(), {
			onshown: function(){
				$('.breadcrumbs-open-services').toggleClass('active');
			},
			onhidden: function(){
				$('.breadcrumbs-open-services').toggleClass('active');
			}
		}, 'services-dialog services-dialog-level-1');


		var dialogTriggerLevel2 = dialogContext('#trigger-level-2'),
		    dialogLevel2 = dialogContext('.services-list.level-2'),
			dialogLevel1Overlay = dialogContext('.level-1-overlay');

		dialogTriggerLevel2.on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			//dialogLevel1Overlay.toggle();
			dialogLevel2.show();
			dialogWindow(dialogLevel2, {}, 'services-dialog services-dialog-level-2');
		});
	});

	//$('.services-list-level-1, .services-list-level-2-back, .services-list-level-2-close').on('click', function(){
	//	$('.services-list').removeClass('level-2-active level-3-active');
	//	$('.services-list-level-2').removeClass('active');
	//	$('.services-list-level-3').removeClass('active');
	//	$('.level-2-item').removeClass('active');
	//	$('.level-1-overlay').hide();
	//});
	//$('.services-list-level-3-close').on('click', function(){
	//	$('.services-list').removeClass('level-3-active');
	//	$('.level-2-item').removeClass('active');
	//	$('.services-list-level-3').removeClass('active');
	//});
	//$('.tile-list-link, .tile-header-link').on('click', function(e){
	//	e.preventDefault();
	//});
	//$('.level-2-item').on('click', function(e){
	//	e.preventDefault();
	//	e.stopPropagation();
	//	$('.level-2-item').removeClass('active');
	//	$(this).addClass('active');
	//	$('.services-list').addClass('level-3-active');
	//	$('.services-list-level-3').addClass('active');
	//});
	//
	//$('.services-filter-type-list a').on('click', function(e){
	//	e.preventDefault();
	//	e.stopPropagation();
	//	$(this).parent().addClass('active').siblings().removeClass('active');
	//});

});