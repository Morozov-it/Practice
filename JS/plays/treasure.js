function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
};

function getDistance(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
    if (distance < 20) {
        return "Fire!";
    } else if (distance < 40) {
        return "Extremely hot";
    } else if (distance < 80) {
        return "Hot";
    } else if (distance < 160) {
        return "Calm";
    } else if (distance < 320) {
        return "Cold";
    } else if (distance < 640) {
        return "Extremely cold";
    } else {
        return "Freez!"
    };
};

var width = 800;
var height = 800;
var clicks = 0;


var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;
    var lostTry = 10 - clicks;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    alert("You have " + lostTry + " clicks yet");
    if (distance < 18) {
        alert("The treasure is found! You have made: " + clicks);
    };
    if (clicks > 9) {
        alert("You have got more " + clicks + " clicks! You lose(");
    }
});
