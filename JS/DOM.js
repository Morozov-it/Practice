//DOM=======================================================
//Получение и изменение содержимого элемента-
const textElement = document.querySelector('.title');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
textElement.innerHTML = `<p>${textElementContent}</p> <p>Exercise 123</p>`;
//или изменение самого элемента--------------
const textElementContent = textElement.outerHTML;
//или изменение только текста----------------
const textElementContent = textElement.textContent;
textElement.textContent = "<p>other text</p> + ";
//создание нового элемента-------------------
const newElement = document.createElement('div');
newElement.innerHTML = `Live and work free time`;
console.log(newElement)
//создание нового текста---------------------
const newText = document.createTextNode('Another text');
console.log(newText)

//методы вставки объекта---------------------
const textElement = document.querySelector('.title');
const newElement = document.createElement('p');
newElement.innerHTML = "New element";
//перед элементом
textElement.before(newElement);
//после элемента
textElement.after(newElement);
//в сам элемент в начало
textElement.prepend(newElement);
//в сам элемент в конец
textElement.append(newElement);

const textElement = document.querySelector('.title');
textElement.insertAdjacentHTML(
    'afterend',
    `<div class="list">
        <p class="list__text" style="color: red;">lorem <span>lorem</span></p>
    </div>
    <div>
        <img src="img/bg.jpg">
    </div>`
);
//'beforebegin' перед элементом
//'afterbegin' в начало элемента
//'beforeend' в конец элемента
//'afterend' после элемента

//перемещение элемента-----------------------
const block = document.querySelector('.list');
const content = document.querySelector('.content');
content.after(block)
//копирование элемента-----------------------
const content = document.querySelector('.content');
content.after(textElement.cloneNode(true));
//удаление элемента--------------------------
const content = document.querySelector('.content');
content.remove();


//CSS==============================================
//перезаписать все классы--------------------
const content = document.querySelector('.content');
const contentClass = content.className;
console.log(contentClass);
content.className = "red";
//classlist----------------------------------
const element = document.querySelector('.content');
//добавить класс 
element.classList.add('active');
//удалить класс 
element.classList.remove('active');
//добавить если нет, удалить если есть 
element.classList.toggle('active');
//проверка наличия класса (true/false)
var result = element.classList.contains('active');
console.log(result);
//перебор всех классов через цикл for of-----
const element = document.querySelector('.content');
element.classList.add('active');
for (let className of element.classList) {
    console.log(className)
}
//изменение стилей элемента------------------
const element = document.querySelector('.list .list__text > span');
element.style.color = "red";
element.style.marginBottom = "20px";
element.style.zIndex = "2";
//или проще таким способом:
element.style.cssText = `
    margin-bottom: 20px;
    z-index: 2;
    color: red;
`;
//получение свойств--------------------------
const element = document.querySelector('.list .list__text > span');
element.style.color = "rgb(214, 214, 0)";
console.log(element.style.color);
const getElementStyle = getComputedStyle(element, "::before");
console.log(getElementStyle.fontSize);
//-------------------------------------------


//АТРИБУТЫ=======================================
//получение атрибутов------------------------ 
const link = document.querySelector('a');
const input = document.querySelector('input');
console.log(link.href);
console.log(input.value);
//список всех доступных атрибутов console.dir(link)
//-------------------------------------------
const lesText = document.querySelector('p');
//проверка наличия атрибута
lesText.hasAttribute('name');
//получение значения атрибута
lesText.getAttribute('name');
//установка значения атрибута
lesText.setAttribute('name', 'value');
//удаление атрибута
lesText.removeAttribute('name');
//-------------------------------------------

//скрыть и показать элемент------------------
const lesText = document.querySelector('span');
lesText.hidden = true;
//==========================================================


//РАЗМЕРЫ, ПРОКРУТКА =======================================
//-------------------------------------------
const mainElement = document.documentElement; //получение html элемента
const mainElementWidth = mainElement.clientWidth; //получение ширины элемента
const mainElementHeight = mainElement.clientHeight; //получение высоты элемента
const windowWidth = window.innerWidth; //это ширина с полосой прокрутки
const windowHeight = window.innerHeight; //это высота с полосой прокрутки
console.log(windowWidth - mainElementWidth); //это ширина полосы прокрутки

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth
); //это полная ширина контента с учетом скролла
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight
); //это полная высота контента с учетом скролла

const windowScrollTop = window.pageYOffset; //это количество прокрученных пикселей сверху 
const windowScrollLeft = window.pageXOffset; //это количество прокрученных пикселей слева 

console.log(mainElementWidth, mainElementHeight);
console.log(windowWidth, windowHeight);
console.log(scrollWidth, scrollHeight);
console.log(windowScrollTop, windowScrollLeft);
//-------------------------------------------

//-------------------------------------------
//прокрутка страницы относительно текущего положения
function setScrollBy() {
    window.scrollBy(0, 50);
    let windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
};
$(".scroll__by").click(setScrollBy);

//прокрутка страницы на абсолютные координаты (pageX, pageY)
function setScrollTo() {
    window.scrollTo(0, 50);
    // window.scroll(0, 50); или можно просто scroll
    let windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
};
$(".scroll__to").click(setScrollTo);

//прокрутка страницы на абсолютные координаты (pageX, pageY) + опции, которые не работают в Safari (Apple)!!!
function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth" //либо instant или по умолчанию auto
    });
};
$(".scroll__to-options").click(setScrollToOptions);

//-------------------------------------------
//прокрутка к указанному элементу
function setScrollIntoView(top) {
    const lesson = document.querySelector('.text');
    lesson.scrollIntoView(top); //элемент по верху окна
};
$(".scroll__intoview").click(setScrollIntoView);

function setScrollIntoViewFalse() {
    const lesson = document.querySelector('.text');
    lesson.scrollIntoView(false); //элемент по низу окна
};
$(".scroll__intoview-false").click(setScrollIntoViewFalse);

//опции не работают в Safari!!! 
function setScrollIntoViewOptions() {
    const lesson = document.querySelector('.text');
    lesson.scrollIntoView({
        block: "center", //start, end, nearest, center-по умолчанию
        inline: "nearest", //start, end, center, nearest-по умолчанию
        behavior: "smooth" //auto-по умолчанию
    });
};
$(".scroll__intoview-options").click(setScrollIntoViewOptions);

//запрет прокрутки для body
function setEnableDisableScroll() {
    document.body.classList.toggle('scroll-lock');
};
$(".scroll__stop").click(setEnableDisableScroll);
//------------------------------------------


//КООРДИНАТЫ ЭЛЕМЕНТОВ======================================
const block = document.querySelector('.lesson__block');

const elementOffsetParent = block.offsetParent; //получение родителя элемента

const elementOffsetLeft = block.offsetLeft; //получение отступа слева относительно родителя в рх
const elementOffsetTop = block.offsetTop; //получение отступа сверху относительно родителя в рх

const elementOffsetWidth = block.offsetWidth; //получение общей ширины элемента в рх
const elementOffsetHeight = block.offsetHeight; //получение общей высоты элемента в рх

const elementClientTop = block.clientTop; //отступ сверху внутренней части содержимого в рх 
const elementClientLeft = block.clientLeft; //отступ слева внутренней части содержимого в рх 

const elementClientWidth = block.clientWidth; //получение ширины внутренней части содержимого в рх
const elementClientHeight = block.clientHeight; //получение высоты внутренней части содержимого в рх

const elementScrolltWidth = block.scrollWidth; //получение ширины скролла внутренней части содержимого в рх
const elementScrollHeight = block.scrollHeight; //получение высоты скролла внутренней части содержимого в рх

const getBlockCoords = block.getBoundingClientRect(); //получение всех координат относительно окна браузера
// DOMRect { x: 243, y: 29, width: 500, height: 300, top: 29, … }
//     bottom: 329
//     height: 300
//     left: 243
//     right: 743
//     top: 29
//     width: 500
//     x: 243
//     y: 29

const getBlockCoords = block.getBoundingClientRect().left; //получение конкретной координаты относительно окна браузера

const getBlockDocumentCoords = getBlockCoords + window.pageYOffset; //получение конкретной координаты относительно документа

const elem = document.elementFromPoint(100, 100); //получение элемента по заданным координатам, относительно окна браузера

//