
var intervalId;
var time = 5

function start() {
    intervalId = setInterval(count, 1000);
    time = 5;
    $("#timer").text(time);
}

function count() {
    if (time > 0) {
    time--;
    $("#timer").text(time);
    console.log(time);
    } else if ( time === 0) {
        clearInterval(intervalId);
    }
}

$("#timer").text(time);

$("#start").on("click", function() {
    start();
});


