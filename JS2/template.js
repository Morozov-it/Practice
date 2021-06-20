//функция проверки числа====================================
var theNumber = Number(prompt("Выбери число", ""));
if (!isNaN(theNumber)) {
    alert("Твоё число – квадратный корень из " + theNumber * theNumber);
} else {
    alert("Ну ты что число-то не ввёл?");
};

//программа вычисления 2 в 10 степени=======================
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter++;
}
console.log(result);

//Замыкающая функция========================================
function wrapValue(n) {
    var localVariable = n;
    return function () {
        return localVariable;
    };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));
// → 10

//Рекурсия=================================================
function power(base, exponent) {
    if (exponent == 0)
    return 1;
    else
    return base * power(base, exponent - 1);
}
console.log(power(2, 3));
// → 8

//Объекты=================================================
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//Аргументы===============================================
function argumentCounter() {
    console.log("Ты дал мне", arguments.length, "аргумента.");
}
argumentCounter("Дядя", "Стёпа", "Милиционер");
// → Ты дал мне 3 аргумента.

//Произвольная точка в круге (функция)====================
function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

//Стандартные методы массива=============================
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
}
//---------------------------------
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
    passed.push(array[i]);
    }
    return passed;
}
//пример вызова стандартного метода--
console.log(ancestry.filter(function(person) {
    return person.father == "Carel Haverbeke";
}));
// → [{name: "Carolus Haverbeke", …}]
//-----------------------------------
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}
var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
return person.name;
}));
// → ["Clara Aernoudts", "Emile Haverbeke",
// "Maria Haverbeke"]

//JSON====================================================
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980

//Фильтрация элементов массива файла JSON================
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
}
console.log(filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
}));

//Вариант проверки ввода информации пользователя=========
function promptNumber(question) {
    var result = Number(prompt(question, ""));
    if (isNaN(result)) return null;
    else return result;
}
console.log(promptNumber("Сколько пальцев видите?"));

//Получение времени и даты==============================
console.log(new Date());
// → Sun Nov 09 2014 00:07:57 GMT+0300 (CET)
console.log(new Date(2015, 9, 21));
// → Wed Oct 21 2015 00:00:00 GMT+0300 (CET)

//Запуск кода JS в элементе HTML========================
<button onclick="alert('Бабах!');">НЕ ЖМИ</button>