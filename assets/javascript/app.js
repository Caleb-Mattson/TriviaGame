
var intervalId;
var time = 30;
var questionAnswered = false;
var correct = 0;
var incorrect = 0;

var triviaObj = [{
    question: "What did Guy-Am-I constantly refuse to eat no matter his location?",
    answers: ["Green Legs and Ham", "Green Eggs and Yam", "Green Eggs and Ham", "Haggis"],
    correctAnswer: "Green Eggs and Ham"
}, 
{
    question: "What was Dr Seuss' first publish book?",
    answers: ["The Cat in the Hat", "The Lorax", "Game of Thrones", "The Pocket Book of Boners"],
    correctAnswer: "The Pocket Book of Boners"
}];

function start() {
    intervalId = setInterval(count, 1000);
    time = 30;
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

var questionDisplay = function(question) {
    $("#trivia").html("<h2>" + question + "</h2>");

};

var mathRandom = function(arr) {

    var returnNumber = Math.floor(Math.random() * arr.length);
    questionDisplay(triviaObj[returnNumber].question);
    arr.splice(returnNumber, 1)
    // console.log(returnNumber);

};

$("#start").on("click", function() {
    start();
    mathRandom(triviaObj);
});





$("#timer").text(time);







