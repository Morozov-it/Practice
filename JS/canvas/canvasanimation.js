var canvas = document.getElementById('canvas');
canvas.style.cssText = `
    background-color: #eee;
    border: 1px solid #000;
`;
var ctx = canvas.getContext('2d');








//Анимированная пчела=================================================
// function circle(x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }    
// };

// function drawBee(x, y) {
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "Black";
//     ctx.fillStyle = "Gold";
//     circle(x, y, 8, true);
//     circle(x, y, 8);
//     circle(x - 5, y - 11, 5);
//     circle(x + 5, y - 11, 5);
//     circle(x - 2, y - 1, 2);
//     circle(x + 2, y - 1, 2);
// };

// function update(coordinate) {
//     var offset = Math.random() * 4 - 2;
//     coordinate += offset;
//     if (coordinate > 200) {
//         coordinate = 200;
//     }
//     if (coordinate < 0) {
//         coordinate = 0;
//     }
//     return coordinate;
// };

// var x = 200;
// var y = 200;
// setInterval(function () {
//     ctx.clearRect(0, 0, 400, 400);
//     drawBee(x, y);
//     x = update(x);
//     y = update(y);
// }, 30);
//====================================================================



//увеличение размера объекта-------------
// var size = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 400, 400);
//     ctx.fillRect(0, 0, size, size);
//     size++;
//     if (size > 400) {
//         size = 0;
//     };
// }, 30);

//проход элемента по холсту--------------
// var position = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 400, 400);
//     ctx.fillRect(position, 0, 40, 40);

//     position++;
//     if (position > 400) {
//         position = 0;
//     };
// }, 30);
