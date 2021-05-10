//CHAPTER 3 - ARRAY==================================================
var randomBodyPart = ["глаз", "нос", "голова"];
var randomAdjective = ["вонючий", "унылый", "дурной"];
var randomAnimal = ["крысы", "мыши", "скунса", "оленя", "олуха"];
var randomAnimalPart = ["шея", "хвост", "лапа"];

var part = randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)];
var adjective = randomAdjective[Math.floor(Math.random() * randomAdjective.length)];
var animal = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
var animalPart = randomAnimalPart[Math.floor(Math.random() * randomAnimalPart.length)];

var insult = "У тебя " + part + " еще более " + adjective + " чем " + animalPart + " у " + animal;
insult
"У тебя нос еще более вонючий чем хвост у скунса"
//-------------------------------------------------
var randomBodyPart = ["глаз", "нос", "голова"];
var randomAdjective = ["вонючий", "унылый", "дурной"];
var randomAnimal = ["крысы", "мыши", "скунса", "оленя", "олуха"];
var randomAnimalPart = ["шея", "хвост", "лапа"];

var part = randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)];
var adjective = randomAdjective[Math.floor(Math.random() * randomAdjective.length)];
var animal = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
var animalPart = randomAnimalPart[Math.floor(Math.random() * randomAnimalPart.length)];

var insult = ["У тебя", part, "еще более", adjective, "чем", animalPart, "у", animal];
insult.join(" ")
"У тебя нос еще более вонючий чем хвост у скунса"
//сортировка чисел в массиве------------------------
var array = [8, 22, 1];
function compare(a, b) {
    return a - b 
};
array.sort(compare)
//=====================================================================

//CHAPTER 4 - OBJECTS==================================================
var scores = {
    Nik: 5,
    Mary: 6,
    Harry: 8
};
scores.Mary = 5
//-------------------------------------------------
var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
myCrazyObject["some array"][2].number
//=====================================================================

//CHAPTER 6 - CONDITIONS and CICLES====================================
var animals = ["Cat", "Fish", "Lemur", "Varan"];
for (var i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - pretty animal";
}
console.log(animals)
//-------------------------------------------------
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6) {
    var random = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomString += random;
}
console.log(randomString)
//-------------------------------------------------
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    }
    else if (input[i] === "e") {
        output += "3";
    }
    else if (input[i] === "i") {
        output += "1";
    }
    else if (input[i] === "o") {
        output += "0";
    }
    else {
        output += input[i];
    }
}
console.log(output);
//=====================================================================

//CHAPTER 8 - FUNCTIONS================================================
var BodyPart = ["глаз", "нос", "голова"];
var Adjective = ["вонючий", "унылый", "дурной"];
var Animal = ["крысы", "мыши", "скунса", "оленя", "олуха"];
var AnimalPart = ["шея", "хвост", "лапа"];
var pickRandomWord = function (word) {
    return word[Math.floor(Math.random() * word.length)];
};
var insult = "У тебя " + pickRandomWord(BodyPart) + " еще более " + pickRandomWord(Adjective) + " чем у " + pickRandomWord(Animal) + " " + pickRandomWord(AnimalPart);
console.log(insult);
//---
var pickRandomWord = function (word) {
    return word[Math.floor(Math.random() * word.length)];
};
var generateRandomInsult = function () {
    var BodyPart = ["глаз", "нос", "голова"];
    var Adjective = ["вонючий", "унылый", "дурной"];
    var Animal = ["крысы", "мыши", "скунса", "оленя", "олуха"];
    var AnimalPart = ["шея", "хвост", "лапа"];
    
    var insult = "У тебя " + pickRandomWord(BodyPart) + " еще более " + pickRandomWord(Adjective) + " чем у " + pickRandomWord(Animal) + " " + pickRandomWord(AnimalPart);
    return insult;
};
console.log(generateRandomInsult());
//-----------------------------------------
var fifthLetter = function (myName) {
    if (myName.length < 5) {
        return "Your name is less than five letters";
    };
    return "The fifth letter of your name is " + myName[4].toUpperCase() + " .";
}
//-----------------------------------------
var medalForScores = function (score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold"
};
//-----------------------------------------
var add = function (number1, number2) {
    return number1 + number2;
};
var multiply = function (number1, number2) {
    return number1 * number2;
};
console.log(multiply(36325, 9824) + add(0, 777))
//-----------------------------------------
var areArraysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//-----------------------------------------
let userInfo = {
    name: "Vasy",
    age: 30,
    showInfo() {
        console.log(`${userInfo.name}`);
    },
};
let user = userInfo;
userInfo = null;
user.showInfo();
//-----------------------------------------
let userInfo = {
    name: "Vasy",
    age: 30,
};
for (const key in userInfo) {
    const value = userInfo[key];
    console.log(value);
};
//----------------------------------------
'use strict'
let showMessage;
if (2 > 1) {
    showMessage = function() {
        console.log("Message");
    }
}
showMessage();
//=====================================================================

//CHAPTER 9 - DOM & JQUERY=============================================
//------------------------------------
$(".title").text("My friends");
for (var i = 0; i < 5; i++) {
    // $(".title").fadeOut(1000);
    // $(".title").fadeIn(1000);
    $(".title").fadeOut(i * 1000);
    $(".title").fadeIn(i * 1000);
};

var friends = ["Anna", "John", "Nik"];
for (var i = 0; i < 3; i++) {
    $("body").append(`<p>${friends[i]}</p>`);
};
$("p").hide();
$("p").fadeIn(3000);
$("p").append(" - the best!");

$("div").fadeTo(3000, 0.5);
$("div").delay(5000).fadeOut(3000);
//------------------------------------
var counter = 0;
function printMessage() {
    counter += 5;
    console.log(`You look at console ${counter} seconds`);
};
var intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId)
//------------------------------------
var leftOffset = 0;
function moveHeading() {
    $(".title").offset({ left: leftOffset });
    leftOffset++;
    if (leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval(moveHeading, 20);
//-----------------------------------
var i = 0;
var counter = 1;
function square() {
    var direct = [{ left: 200 }, { top: 200 }, { left: 0 }, { top: 0 }];
    $(".title").offset(direct[i]);
    i++;
    if (i > 4) {
        i = 0;
    };
};
function clickHandle() {
    if (counter < 10) {
        var intervalId = setInterval(square, 5000 / counter);
        $("h1").text(counter);
    } else {
        clearInterval(intervalId);
        $("h1").text("You win!");
    };
    counter++;
};
$(".title").click(clickHandle);
//=====================================================================