var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

function circle(x, y, radius, fillCircle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }    
};

var Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.size = 10;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed * this.speed;
    this.y += this.ySpeed * this.speed;
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
    // if (this.x > width) {
    //     this.x = 0;
    // } else if (this.x < 0) {
    //     this.x = width;
    // }
    // if (this.y > height) {
    //     this.y = 0;
    // } else if (this.y < 0) {
    //     this.y = height;
    // }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, this.size, true, "black");
};

Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    } else if (direction === "left") {
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if (direction === "right") {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (direction === "speedUp") {
        if (this.speed < 10) {
            this.speed++;
        }
    } else if (direction === "speedDown") {
        if (this.speed > 0) {
            this.speed--;
        }
    } else if (direction === "sizeUp") {
        if (this.size < 30) {
            this.size++;
    }
    } else if (direction === "sizeDown") {
        if (this.size > 5) {
            this.size--;
        }
    }
};

Ball.prototype.setSpeed = function (newSpeed) {
    if (newSpeed !== undefined) {
        this.speed = newSpeed;
    };
};

var ball = new Ball();

var keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    90: "speedDown", //z
    88: "speedUp", //x
    67: "sizeDown", //c
    86: "sizeUp" //v
};
var speeds = {
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9
};

$("body").keydown(function (event) {
    var direction = keyActions[event.keyCode];
    var newSpeed = speeds[event.keyCode];
    ball.setSpeed(newSpeed);
    ball.setDirection(direction);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);

// var keyNames = {
//     32: "space", //пробел
//     37: "left", //влево
//     38: "up", //вверх
//     39: "right", //вправо
//     40: "down", //вниз
//     16: "shift", 
//     13: "enter", 
//     18: "alt"
// };
// $("body").keydown(function (event) {
//     console.log(keyNames[event.keyCode]);
// });

// получение символа нажатой клавиши------
// $("body").keydown(function (event) {
//     console.log(event.keyCode);
// });
