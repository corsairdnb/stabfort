$(function(){

	var fixedMenu = $('.fixed-menu');

	if (fixedMenu.length == 0) {
		return;
	}

	var	fixedMenuHeight = parseInt(fixedMenu.height()),
		fixedMenuTop = parseInt(fixedMenu.css('top')),
		fixedMenuVerticalSize = parseInt(fixedMenuHeight + fixedMenuTop),
		main = $('.main'),
		mainHeight = main.height(),
		footerHeight = parseInt($('.footer').height()),
		breakpoint = getBreakpoint();

	main.css('min-height', fixedMenuVerticalSize);

	function getBreakpoint(){
		return mainHeight < fixedMenuVerticalSize ? 0 : parseInt(document.body.clientHeight) - footerHeight - fixedMenuVerticalSize - 100;
	}
	function fixedMenuHorizontal(){
		if (document.documentElement.clientWidth >= 1260) {
			var serviceMenuLeft = Math.floor((document.documentElement.clientWidth - 1240) / 2 + main.find('.section-cnt').width());
			fixedMenu.css('left', serviceMenuLeft);
		}
	}
	function fixedMenuVertical(){
		if (document.documentElement.clientWidth >= 1260) {
			var scrollTop = (function(){
				var scroll = typeof window.scrollY !== 'undefined' ? window.scrollY : window.pageYOffset;
				return typeof scroll !== 'undefined' ? scroll : document.documentElement.scrollTop
			}());

			if (scrollTop > breakpoint) {
				fixedMenu.css('top', breakpoint+fixedMenuTop - scrollTop);
			}
			else {
				fixedMenu.css('top', fixedMenuTop);
			}
		}
	}
	fixedMenuHorizontal();
	fixedMenuVertical();
	$(window).resize(function(){
		breakpoint = getBreakpoint();
		fixedMenuHorizontal();
		fixedMenuVertical();
	});
	$(window).scroll(function(){
		fixedMenuVertical();
	});

});