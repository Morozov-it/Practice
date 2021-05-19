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