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





	var dialog;

	$('.breadcrumbs-open-services').on('click', function(){
		dialog = DialogWindow($('.services-dialog-content').clone());
		var dialogInstance = dialog.show({
			onshown: function(dialogRef){
				$('.breadcrumbs-open-services').toggleClass('active');
				dialogRef.$modalContent.find('.text-input').trigger('focus');
			},
			onhidden: function(){
				$('.breadcrumbs-open-services').toggleClass('active');
			}
		}, 'services-dialog services-dialog-level-1');

		var dialogContext = function(selector){
			return dialogInstance.$modalContent.find(selector);
		};


		var dialogTriggerLevel2 = dialogContext('#trigger-level-2'),
		    dialogLevel2 = dialogContext('.services-list.level-2'),
			dialogLevel1Overlay = dialogContext('.level-1-overlay');

		dialogTriggerLevel2.on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			dialogLevel2.show();
			//var level2content = dialog.content(dialogInstance, dialogLevel2, {}, 'services-dialog services-dialog-level-2');
			dialogContext('.bootstrap-dialog-message').html(dialogLevel2.clone());

			//dialogContext('.services-list.level-2 .level-header').on('click', function(){
			//	dialogContext('.bootstrap-dialog-message').html($('.services-dialog-content').clone().find('.services-list.level-1'));
			//});
		});
	});

});