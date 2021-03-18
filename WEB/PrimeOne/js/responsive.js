//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	var headerMenu=$('.header-menu');
	var headerLang=$('.header-top-lang');
if(w<767){
	if(!headerLang.hasClass('done')){
		headerLang.addClass('done').appendTo(headerMenu);
	}
}else{
	if(headerLang.hasClass('done')){
		headerLang.removeClass('done').prependTo($('.header-top'));
	}
}
if(w<767){
	if(!$('.header-bottom__menu').hasClass('done')){
		$('.header-bottom__menu').addClass('done').appendTo(headerMenu);
	}
}else{
	$.each($('.header-bottom__menu'), function(index, val) {
		if($(this).hasClass('header-bottom__menu--right')){
			if($(this).hasClass('done')){
				$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
			}
		}else{
			if($(this).hasClass('done')){
				$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
			}
		}
	});
}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();
