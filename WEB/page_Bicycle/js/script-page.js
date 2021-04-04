$(document).ready(function() {
	$('.menu__body,.icon-menu').click(function(event) {
		$('.menu__body,.icon-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
