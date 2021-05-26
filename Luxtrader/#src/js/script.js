@@include('swiper.min.js')
@@include('sliders.js')
@@include('dynamic_adapt.js')
    
//для работы gulp с картинками в css
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    }
);

//выпадающее меню по кнопке
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('active');
});
//закрытие меню по клику в любое место
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('active');
    }
});

//бургер меню
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu !== null) {
    let body = document.querySelector('body');
    let menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        body.classList.toggle('lock');
    });
};

//ibg
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
};
ibg();