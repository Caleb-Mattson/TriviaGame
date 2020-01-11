
var intervalId;
var time = 30; // default time for game
var correct = 0; // keeps track of correct answers
var incorrect = 0; // keeps tracks of incorrect answers
var gameRunning = false; // check to see if the game is running or not
var counter = 0; //used to reference the correct area of the array 


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

// start function to initialize game
function start() {


    if (!gameRunning) {
        $("#start").hide();
        gameRunning = true
        intervalId = setInterval(count, 1000);
        time = 30;
        $("#timer").text(time);
        correct = 0;
        incorrect = 0;
        answerArray();
    } 
}

// handles time actions
function count() {
    if (time > 0) {
        time--;
        $("#timer").text(time);
        console.log(time);
    } else if (time === 0) {
        endGame();
    }
}

// declares actions to take if a game ending occurs
var endGame = function () {
    clearInterval(intervalId);
    time = 0;
    $("#timer").text(time);
    $("#start").show();
    $("#trivia").empty();
    $("#trivia").append("<p class='score'> Correct Answers: " + correct + "</p>");
    $("#trivia").append("<p class='score'> Incorrect Answers: " + incorrect + "</p>");
    gameRunning = false;
    counter = 0;
}


// display initial time on page
$("#timer").text(time);


var answerArray = function () {

    // check to make sure there are still questions left in the array
    if (counter === 6) {
        gameRunning = false;
        clearInterval(intervalId);
        time = 0;
        $("#timer").empty();
        $("#start").show();
        $("#trivia").empty();
        $("#trivia").append("<p class='score'> Correct Answers: " + correct + "</p>");
        $("#trivia").append("<p class='score'> Incorrect Answers: " + incorrect + "</p>");
        counter = 0;

    }
    else {
        // Deleting the buttons prior to adding new ones
        // (this is necessary otherwise you will have repeat buttons)
        $("#trivia").empty();

        $("#trivia").html("<h2>" + triviaObj[counter].question + "</h2>");


        // Looping through the array of triviaObj[counter].answers
        for (var i = 0; i < 4; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of answers to our button
            a.addClass("answers");
            // Adding a data-attribute
            a.attr("data-name", triviaObj[counter].answers[i].toLowerCase());
            // Providing the initial button text
            a.text(triviaObj[counter].answers[i]);
            // Adding the button to the buttons-view div
            $("#trivia").append(a);
        }
    }

    answerClick();

}

var answerClick = function () {
    $(".answers").on("click", function () {
        // check to see if button press is the same as the answer key
        if ($(this).attr("data-name") === triviaObj[counter].correctAnswer.toLowerCase()) {
            console.log("H9uodh0haspidh0agasdjas")
            counter++;
            correct++;
            answerArray();
        } 
            // if button click is not the same as answer key, do these actions
        else if ($(this).attr("data-name") != triviaObj[counter].correctAnswer.toLowerCase()) {
            console.log("I am dying! save me!");
            incorrect++;
            counter++;

            answerArray();
        }

    });

}

// starts the game on click
$("#start").on("click", function () {
    start();

});

// displays default time for first time loading page
$("#timer").text(time);







