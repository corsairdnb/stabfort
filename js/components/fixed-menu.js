$(function(){

	var fixedMenu = $('.fixed-menu'),
		fixedMenuHeight = parseInt(fixedMenu.height()),
		fixedMenuTop = parseInt(fixedMenu.css('top')),
		fixedMenuVerticalSize = parseInt(fixedMenuHeight + fixedMenuTop),
		breakpoint = getBreakpoint();

	function getBreakpoint(){
		return parseInt(document.body.clientHeight) - parseInt($('.footer').height()) - fixedMenuVerticalSize - 100;
	}
	function fixedMenuHorizontal(){
		if (document.documentElement.clientWidth >= 1260) {
			var serviceMenuLeft = Math.floor((document.documentElement.clientWidth - 1240) / 2 + $('.main .section-cnt').width());
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