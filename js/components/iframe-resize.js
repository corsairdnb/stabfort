$(function(){

	var iframeContainer = $('.iframe-resize');

	function resize() {
		iframeContainer.each(function(i,e){
			var iframe = $(e).find('iframe'),
				ratio;
			if (!iframe.attr('data-ratio')) {
				var width = parseInt(iframe.attr('width')),
					height = parseInt(iframe.attr('height'));
				ratio = width / height;
				iframe.attr('data-ratio', ratio);
			}
			iframe.attr('width', '100%');
			iframe.attr('height', parseInt(iframe.width()) / iframe.attr('data-ratio'));
		});
	}

	resize();

	$(window).resize(function(){
		resize();
	});

});