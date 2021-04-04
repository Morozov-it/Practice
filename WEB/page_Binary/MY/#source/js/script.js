$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.menu__icon,.menu__body').toggleClass('active');
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


$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});

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


//Подключение фильтра
$('.filter__item').click(function(event) {
	var i=$(this).data('filter');
if (i==1) {
	$('.portfolio__column').show();
}else{
	$('.portfolio__column').hide();
	$('.portfolio__column.f_'+i).show();
}
$('.filter__item').removeClass('active');
$(this).addClass('active');

return false;
});

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
//Параллакс фона при скролле экрана
$(window).scroll(function(event) {
	var s=0-$(this).scrollTop()/3;
$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});