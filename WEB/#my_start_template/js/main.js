function ibg(){$.each($(".ibg"),(function(i,n){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}$(document).ready((function(){$(".icon-menu").click((function(i){$(".menu__icon,.menu__body").toggleClass("active"),$("body").toggleClass("lock")}))})),ibg();