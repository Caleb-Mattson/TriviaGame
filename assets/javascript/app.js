
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
},
{
    question: "Finish this book Title by Dr Seuss: One Fish Two Fish_",
    answers: ["White Fish Orange Fish", "Red Fish Blue Fish", "Three Fish Four!", "Epstein Didn't Kill Himself"],
    correctAnswer: "Red Fish Blue Fish"
},
{
    question: "What Holiday was the Grinch especially sour about?",
    answers: ["Halloween", "Secretaries Day", "Christmas", "Mondays"],
    correctAnswer: "Christmas"
},
{
    question: "What species was Horton in 'Horton Hears a Who'?",
    answers: ["Pig", "Ostrich", "Zingledopper", "Elephant"],
    correctAnswer: "Elephant"
},
{
    question: "What color socks did the Fox in Socks wear?",
    answers: ["Blue", "Red", "Yellow", "Green"],
    correctAnswer: "Blue"
},];

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







