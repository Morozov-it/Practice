$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.menu__icon,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// =======================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
	


// function ibg() {
// 	if (isIE()) {
// 		let ibg = document.querySelectorAll(".ibg");
// 		for (var i = 0; i < ibg.length; i++) {
// 			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
// 				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 			}
// 		}
// 	}
// }
// ibg();

// =======================================================================

// //ZOOM
if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom options
	});
}

//Переход на класс по странице
$('.goto').click(function() {
	var el=$(this).attr('href').replace('#','');
	var offset=0;
$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},700, function() {});

if($('.header-menu').hasClass('active')){
	$('.header-menu,.header-menu__icon').removeClass('active');
	$('body').removeClass('lock');
}
return false;
});

// =======================================================================