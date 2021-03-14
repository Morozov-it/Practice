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


$(document).ready(function(){
	$('.slider__body').slick({
		arrows:false,
		dots: true, //'true or false'
		slidesToShow:1, 
		adaptiveHeight:true, //'true or false'
		speed:100, //scroll speed
		easing: 'linear', //animation /or ease
		infinite:true, //'true or false' бесконечная прокрутка
		waitForAnimate:true, //'true or false' возможность быстрого клика
		//appendArrows:$('div.any'), //переместить стрелки в этот блок
		// appendDots:$('div.any'), //переместить точки в этот блок
		// responsive:[
		// 	{
		// 		breakpoint: 1250,
		// 		settings: {
		// 			slidesToShow:2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 950,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});
});