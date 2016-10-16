$(document).ready(function(){
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 3000);
});

var inputValues = {
	'moonLevel': 1,
	'fireLevel' : 2,
	'cloudLevel' : 0,
	'starsLevel' : 0,
	'houseLevel' : 0
};

var drv = new Driver();
window.onload = function(){
	$('input[type="range"]').change(function(){
		var moonLevel = $('#moon-input-range').val(),
			fireLevel = $('#fire-input-range').val(),
			starsLevel = $('#star-input-range').val(),
			cloudLevel = $('#cloud-input-range').val(),
			houseLevel = $('#house-input-range').val();

		inputValues.moonLevel = parseInt(moonLevel, 10);
		inputValues.fireLevel = parseInt(fireLevel, 10);
		inputValues.starsLevel = parseInt(starsLevel, 10);
		inputValues.cloudLevel = parseInt(cloudLevel, 10);
		inputValues.houseLevel = parseInt(houseLevel, 10);

		drv.watch(inputValues);
	});
};


