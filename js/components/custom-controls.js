$(function(){

	var sliderInput = $('.slider-input'),
		customSelect = $('.custom-select');

	sliderInput
		.each(function(i,e){
			var sliderInstance = $(e)
				.slider({
					formatter: function(ar) {
						return ar[0] + ' - ' + ar[1];
					},
					tooltip_position: 'bottom'
				})
				.on('slide', function(e) {
					$('[data-min="' + e.currentTarget.id + '"]').val(e.value[0]);
					$('[data-max="' + e.currentTarget.id + '"]').val(e.value[1]);
				});
			var inputMin = $('[data-min="' + e.id + '"]'),
				inputMax = $('[data-max="' + e.id + '"]');
			inputMin.add(inputMax).on('input', function(){
				sliderInstance.slider('setValue', [parseInt(inputMin.val()), parseInt(inputMax.val())]);
			});
		});




	customSelect.selectpicker({
		//mobile: true
	});

	function customSelectMobile() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			customSelect.selectpicker('mobile');
		}
	}

	customSelectMobile();
	$(window).resize(function() {
		customSelectMobile();
	});

});