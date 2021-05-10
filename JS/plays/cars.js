//Через конструктор=======================================================
// var Car = function (x, y) {
//     this.x = x;
//     this.y = y;
// };

// var drawCar = function (car) {
//     var carHtml = '<img src="http://nostarch.com/images/car.png">';
//     var carElement = $(carHtml);
//     carElement.css({
//         position: "absolute",
//         left: car.x,
//         top: car.y
//     });
//     $("body").prepend(carElement);
// };


// var tesla = new Car(20, 20);
// var nissan = new Car(100, 200);
// drawCar(tesla);
// drawCar(nissan);

//Через ООП===============================================================
//создание конструктора
var Car = function (x, y) {
    this.x = x;
    this.y = y;
};
var windowWidth = window.innerWidth;
var maxWidth = windowWidth - 130;
var windowHeight = window.innerHeight;
var maxHeight = windowHeight - 90;

//добавление нового метода(функции) draw
Car.prototype.draw = function () {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").prepend(this.carElement);
};
Car.prototype.moveRight = function () {
    var speed = Math.floor(Math.random() * 20);
    this.x += speed;
    if (this.x > maxWidth) {
        this.x = 0;
    };
    this.carElement.css({
    left: this.x,
    top: this.y
    });
};
// Car.prototype.moveLeft = function () {
//     this.x -= 5;
//     this.carElement.css({
//     left: this.x,
//     top: this.y
//     });
// };
// Car.prototype.moveUp = function () {
//     this.y -= 5;
//     this.carElement.css({
//     left: this.x,
//     top: this.y
//     });
// };
Car.prototype.moveDown = function () {
    var speed = Math.floor(Math.random() * 20);
    this.y += speed;
    if (this.y > maxHeight) {
        this.y = 0;
    };
    this.carElement.css({
    left: this.x,
    top: this.y
    });
};

// это объявление новых функций
var tesla = new Car(10, 10);
var nissan = new Car(10, 100);
//это вызов свойств (методов) объектов
tesla.draw();
nissan.draw();
//это запуск игры через setInterval
var nissanIntervalMoveRight = setInterval(nissan.moveRight.bind(nissan), 100);
var nissanIntervalMoveDown = setInterval(nissan.moveDown.bind(nissan), 100);
var teslaIntervalMoveRight = setInterval(tesla.moveRight.bind(tesla), 100);
var teslaIntervalMoveDown = setInterval(tesla.moveDown.bind(tesla), 100);

$("html").click(function () {
    clearInterval(nissanIntervalMoveRight);
    clearInterval(nissanIntervalMoveDown);
    clearInterval(teslaIntervalMoveRight);
    clearInterval(teslaIntervalMoveDown);
});