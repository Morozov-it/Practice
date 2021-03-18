$(document).ready(function(){
	$('.slider__body').slick({
		arrows:false, //'true or false'
		dots:true, //'true or false'
		adaptiveHeight:true, //'true or false'
		slidesToShow: 1, //amount 1,2,3,4,5....
		slidesToScroll: 1, //amount 1,2,3,4,5....
		speed:100, //scroll speed
		easing: 'linear', //animation /or ease
		infinite:true, //'true or false' бесконечная прокрутка
		waitForAnimate:false, //'true or false' возможность быстрого клика
	});
});

