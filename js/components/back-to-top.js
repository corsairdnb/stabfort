$(function(){

	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 1000,
		backToTop = $('.back-to-top');

	var toggleBackToTop = function () {
		var scroll = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
		scroll > offset ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible is-hidden');
		if (scroll > offset_opacity && document.body.clientWidth < 768) {
			backToTop.addClass('is-hidden');
		}
	};

	$(window).scroll(function(){
		toggleBackToTop();
	});
	$(window).resize(function(){
		toggleBackToTop();
	});
	toggleBackToTop();

	backToTop.on('click', function(e){
		e.preventDefault();
		$.scrollTo($('body'), scroll_top_duration);
	});

}());