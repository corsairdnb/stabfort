$(function(){

	$('.mobile-icon').on('click', function(){
		$('.top-menu').toggleClass('opened');
	});

	$('.peppermint').Peppermint({
		//transition time when changing slides, ms
		speed: 300,

		//transition time when changing slides after touch, ms
		touchSpeed: 300,

		//slideshow enabled
		slideshow: false,

		//slideshow interval, ms
		slideshowInterval: 2000,

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
		onSlideChange: function(a){
			/*var slide = $('.home-carousel').find('.slide').eq(parseInt(a)-1).find('.slide-content').css('opacity', 0);
			setTimeout(function(){
				slide.css('opacity', 1);
			}, 300, slide);*/
		},

		//Callback function, runs at setup end.
		//Receives total number of slides as a parameter.
		onSetup: undefined
	});

	$('.home-video-play').on('click', function(){
		//TODO: реализовать остановку видео при закрытии модального окна
		// из-за same-origin-policy невозможно получить доступ к плееру
		$('.video-modal')
			.on('show.bs.modal', function () {
				var body = $(this).find('.modal-body');
				if (body.html() == '') {
					body.html('<iframe width="850" height="638" src="http://www.youtube.com/embed/3zbvUTQq6Uc?rel=0&autoplay=true" frameborder="0" allowfullscreen id="'+ player_id +'"></iframe>');
				}
			})
			/*.on('hide.bs.modal', function () {
				var iframe = document.getElementById(player_id).contentWindow;
				iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			})*/
			.modal();
	});

});