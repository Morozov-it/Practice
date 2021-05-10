var canvas = document.getElementById('canvas');
canvas.style.cssText = `
    background-color: #ccc;
    border: 1px solid #000;
`;
var ctx = canvas.getContext('2d');

//рисование фигур через данные массивов--
// var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
// var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50],
// [70, 90], [100, 90], [70, 120]];
// function drawpoints(array) {
//     ctx.beginPath();
//     for (var i = 0; i < array.length; i++) {
//         ctx.lineTo(array[i][0], array[i][1]);
//     };
//     ctx.stroke();
// };
// drawpoints(points);
// drawpoints(mysteryPoints)

//снеговик в произвольном месте----------
// function drawSnowman(x, y) {
//     circle(x, y, 30, "black", 4);
//     circle(x, y + 5, 5, "yellow", 1, true);
//     circle(x - 10, y - 5, 5, "black", 1, true);
//     circle(x + 10, y - 5, 5, "black", 1, true);
//     circle(x, y + 80, 50, "black", 4);
//     circle(x, y + 60, 5, "black", 1, true);
//     circle(x, y + 80, 5, "black", 1, true);
//     circle(x, y + 100, 5, "black", 1, true);
// };
// drawSnowman(150, 150);

//снеговик-------------------------------
// circle(100, 100, 30, "black", 4);
// circle(100, 105, 5, "yellow", 1, true);
// circle(90, 95, 5, "black", 1, true);
// circle(110, 95, 5, "black", 1, true);
// circle(100, 180, 50, "black", 4);
// circle(100, 160, 5, "black", 1, true);
// circle(100, 180, 5, "black", 1, true);
// circle(100, 200, 5, "black", 1, true);


// функция вариантной окружности----------
function circle(x, y, radius, color, width, fillCircle) {
    ctx.lineWidth = width;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }    
};
// circle(50, 50, 20, "blue", true);

//быстрая функция вызова пустой окружности-
// function circle(x, y, radius) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.stroke();
// };
// circle(50, 50, 20);

// четверть окружности-------------------
// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();
// половина окружности-------------------
// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();
// три четверти окружности---------------
// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 3/2, false);
// ctx.stroke();
// окружность----------------------------
// ctx.beginPath();
// ctx.arc(200, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();


//заливка замкнутой фигуры--------------
// ctx.fillStyle = "Blue";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// ctx.fill();

//фигура человечек----------------------
// ctx.lineWidth = 4;
// ctx.strokeRect(50, 50, 20, 20);
// ctx.beginPath();
// ctx.moveTo(60, 70);
// ctx.lineTo(60, 120);
// ctx.lineTo(80, 150);
// ctx.moveTo(80, 85);
// ctx.lineTo(60, 100);
// ctx.lineTo(40, 85);
// ctx.moveTo(60, 120);
// ctx.lineTo(40, 150);
// ctx.stroke();

//способ рисования линий и путей--------
// ctx.strokeStyle = "Turquoise";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(10, 60);
// ctx.lineTo(60, 10);
// ctx.stroke();

//контур прямоугольника------------------
// ctx.strokeStyle = "DeepPink";
// ctx.lineWidth = 4;
// ctx.strokeRect(10, 10, 100, 20);

//рисование через цикл for---------------
// for (var i = 0; i < 12; i++) {
//     ctx.fillRect(0, 70, 110, 10);
//     ctx.fillStyle = "purple";
//     ctx.fillRect(20, 70, 10, i * 10);
//     ctx.fillRect(80, 70, 10, i * 10);
// };
// ctx.fillStyle = "red";
// ctx.fillRect(30, 0, 50, 50);
// ctx.fillRect(50, 50, 10, 20);
// ctx.fillStyle = "skyBlue";
// ctx.fillRect(30, 80, 50, 60);

//рисование через клик-------------------
// $("canvas").click(function (event) {
//     ctx.fillStyle = "black";
//     var x = event.pageX - 10;
//     var y = event.pageY - 10;
//     ctx.fillRect(x, y, 10, 10);
// });

//рисование движением мышки
// $("canvas").mousemove(function (event) {
//     circle(event.pageX, event.pageY, 3, "black", 1, true);
// });