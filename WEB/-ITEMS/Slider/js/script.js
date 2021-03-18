$(document).ready(function(){
	$('.slider').slick({
		arrows:true, //'true or false'
		dots:true, //'true or false'
		adaptiveHeight:true, //'true or false'
		slidesToShow: 3, //amount 1,2,3,4,5....
		slidesToScroll: 1, //amount 1,2,3,4,5....
		speed:100, //scroll speed
		easing: 'linear', //animation /or ease
		infinite:true, //'true or false' бесконечная прокрутка
		autoplay:false, //'true or false'
		autoplaySpeed: 800,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true, //'true or false' отключение прокрутки мышкой
		swipe:true, //'true or false' отключение на смартфонах
		touchThreshold:10, //область для свайпа, меньше число-больше провести
		touchMove: true, //'true or false'
		waitForAnimate:false, //'true or false' возможность быстрого клика
		centerMode:true, //'true or false слайд по центру
		variableWidth: false, //'true or false
		rows: 1, //amount 1,2,3,4,5....
		slidesPerRow: 1, //amount 1,2,3,4,5....
		vertical:false, //'true or false' вертикальный слайдер
		verticalSwiping:false, //'true or false' вертикальный свайп
		asNavFor:".sliderbig", //связать с этим слайдером
		//appendArrows:$('div.any'), //переместить стрелки в этот блок
		// appendDots:$('div.any'), //переместить точки в этот блок
		responsive:[
			{
				breakpoint: 1250,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.sliderbig').slick({
		arrows: false,
		fade:true, //'true or false выключение эффекта перелистывания
		asNavFor:".slider", //связать с этим слайдером
	});
});
