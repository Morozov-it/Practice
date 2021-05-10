// CONDITIONS============================================
var youName = "Christ";
console.log("Hello, " + youName + "!");
if (youName.length > 6) {
    console.log("Ohh, you have a longest name!");
} else {
    console.log("Your name is no longer.");
}

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
if (lemonChicken) {
    console.log("Yeah, I'll get lemonChicken!");
} else if (beefWithBlackBean) {
    console.log("I will beefWithBlackBean.");
} else if (sweetAndSourPork) {
    console.log("OK, I will sweetAndSourPork.");
} else {
    console.log("So, there is rise with egg.");
}

var myName = "Marina";
if (myName === "Grigory") {
    console.log("Hello, myself!");
} else if (myName === "Grigory old") {
    console.log("Hello, father!");
} else if (myName === "Marina") {
    console.log("Hello, mother!");
} else {
    console.log("Hello, stranger!");
}
//=======================================================


//CICLE==================================================
//WHILE-----------------------
var sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("Sheep: " + sheepCounted + "!");
    sheepCounted++;
}
console.log("Hrrrrrrrrr......pssssss");
var x = 3;
while (x < 10000) {
    console.log(x);
    x = x * 3;
}
//----------------------------

//FOR-------------------------
var sayHello = 3;
for (var i = 0; i < sayHello; i++){
    console.log("Hello!");
}

var animals = ["Lion", "Flamingo", "Bear"];
for (var i = 0; i < animals.length; i++) {
    console.log("There is a " + animals[i] + " in the zoo.");
}
var myName = "GRIGORY";
for (var i = 0; i < myName.length; i++) {
    console.log("There is a char" + " '" + myName[i] + "' " + "in my name");
}

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}
//-----------------------------
//=========================================================


//REQUIRES=================================================
//----------------------------
var Name = prompt("What is your name?");
console.log("Hello, " + Name);
//-----------------------------
var likesCats = confirm("Do you like cats?");
if (likesCats) {
    console.log("You are nice cat!");
} else {
    console.log("So, no problem. Whatever you are very well!")
}
//-----------------------------
alert("Javascript is awesome!");
//-----------------------------
//==========================================================


//FUNCTIONS=================================================
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
};
//-----------------------------
var drawCats = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
//-----------------------------
var double = function (number) {
    return number * 2;
};

function double(number) {
    return number * 2;
};
//-----------------------------
// function - callback---------
function calcSumm(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;
    if (numSumm > 3) {
        more();
    } else {
        less();
    }
}
function showMoreMessage() {
    console.log("More than 3");
}
function showLessMessage() {
    console.log("Less than 3");
}
calcSumm(2, 1, showMoreMessage, showLessMessage);
//------------------------------
// function recursion-----------
function recursion(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * recursion(numOne, numTwo - 1);
    }
}
console.log(recursion(2, 3));
//------------------------------
// setTimeout & setInterval-----
function showMessage(text, name) {
    console.log(`${text}, ${name}`);
};
setTimeout(showMessage, 3000, "Hello", "Vasy");
//
setInterval(showMessage, 3000, "Hello", "Vasy");
//это аналог интервалов только надежнее
function showMessage(text, name) {
    console.log(`${text}, ${name}`);
    setTimeout(showMessage, 1000, "Hello", "Vasy");
};
setTimeout(showMessage, 3000, "Hello", "Vasy");
//секундомер-------------------
function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num);
    }
};
setTimeout(showNumber, 1000, 1);
//==========================================================


//DOM & JQUERY==============================================
//changing content item (DOM)---------
var headingElement = document.getElementById("element");
console.log(headingElement.innerHTML);
var newText = prompt("Input the new title");
headingElement.innerHTML = newText;

//changing content item (JQUERY)-----
var newText = prompt("Input a new title");
$("#element").text(newText);

//searching and adding of items------
$("body").append("<p>It's a new section</p>");
for (var i = 0; i < 3; i++) {
    var hobby = prompt("Call one of your hobby");
    $("p").append(`<span>${hobby}</span>`);
};

//disappearing of the item------------
$("h1").fadeOut(3000);

$("h1").text("This text will be disappeared soon and come out again").fadeOut(3000).fadeIn(2000);

for (var i = 0; i < 5; i++) {
    $("h1").slideUp(3000);
    $("h1").slideDown(2000);
};

for (var i = 0; i < 5; i++) {
    $("h1").hide(3000);
    $("h1").show(2000);
};

//setTimeout & setInterval------------
function doHomework() {
    alert("Let's do it!");
};
var timeoutId = setTimeout(doHomework, 5000);
clearTimeout(timeoutId);

var counter = 1;
var printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
    counter++;
};
var intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId);

//Event click-------------------------
var clickHandler = function (event) {
    console.log("Click! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);

//Event mousemove---------------------
$("html").mousemove(function (event) {
    $(".title").offset({
        left: event.pageX,
        top: event.pageY
    });
});
//------------------------------------


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

//Работа с CSS==============================================
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

//работа с атрибутами=======================================
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

//ООП=======================================================
//добавление методов(функций) в свойства объекта-
var dog = {
    name: "Doggy",
    legs: 4,
    isAwesome: true
};
dog.bark = function () {
    console.log(`Bark, bark my name is ${this.name} !`);
};
dog.bark()

var speak = function () {
    console.log(this.sound + "! My name is " + this.name + "!");
};
var cat = {
    name: "Gloves",
    sound: "Mya",
    call: speak
};
cat.call();
//------------------------------------------------