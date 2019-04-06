


$(document).ready(function(){


// variables to track
var wins= 0;
var losses = 0;
var totalScore= 0;
var gameNum = 0;
var crystalValues =[];


//computer chooses a number between 19-120
var gameNum = Math.floor((Math.random() * 101 + 19));
$("#gameNum").html(gameNum);


//crystals are associated with a random number 

var crystalOneNum = Math.floor(Math.random()* 11 +1 );
var crystalTwoNum = Math.floor(Math.random()* 11 +1 );
var crystalThreeNum = Math.floor(Math.random()* 11 +1 );
var crystalFourNum = Math.floor(Math.random()* 11 +1 );


//assigns a consistent value to the crystals & turns everything into numbers
totalScoreNum = parseInt(totalScore);
crystalValues[0] = parseInt(crystalOneNum);
crystalValues[1] = parseInt(crystalTwoNum);
crystalValues[2] = parseInt(crystalThreeNum);
crystalValues[3] = parseInt(crystalFourNum);


// <---------------------------------------FUNCTIONS------------------------------------------>
//reset the game 
function gameReset() {

    var gameNum = Math.floor((Math.random() * 101 + 19));
    $("#gameNum").html(gameNum);  
    totalScore =0;
    $("#total-score").text("Your score: " + totalScore);
    var crystalOneNum = Math.floor(Math.random()* 11 +1 );
    var crystalTwoNum = Math.floor(Math.random()* 11 +1 );
    var crystalThreeNum = Math.floor(Math.random()* 11 +1 );
    var crystalFourNum = Math.floor(Math.random()* 11 +1 );
    totalScoreNum = parseInt(totalScore);
    crystalValues[0] = parseInt(crystalOneNum);
    crystalValues[1] = parseInt(crystalTwoNum);
    crystalValues[2] = parseInt(crystalThreeNum);
    crystalValues[3] = parseInt(crystalFourNum);
}

//winning condition function 
function winningCondition(){
if(totalScore === gameNum){
    $("#results").text("Winner, Winner Chicken Dinner!")
    wins++;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    gameReset();
    console.log('yay!')
} else if(totalScore > gameNum){
    $("#results").text("BUST! Try again!")
    losses++;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    gameReset();
    console.log('boo');
}
};

//adds crystal values to total score
//pushes the crystal values to html 
// <---------------------------------------Crystal ONE------------------------------------------>
$("#crystal-one").on("click", function(){
    $("#crystal-one").val(crystalValues[0]); 
    console.log($("#crystal-one").val());
    totalScore = totalScoreNum += crystalValues[0];
    $("#total-score").text("Your score: " + totalScore);
    console.log(totalScore);
    winningCondition();     
})  
// <---------------------------------------Crystal TWO------------------------------------------>
$("#crystal-two").on("click", function(){
    $("#crystal-two").val(crystalValues[1]); 
    console.log($("#crystal-two").val()); 
    totalScore = totalScoreNum += crystalValues[1];
    $("#total-score").text("Your score: " + totalScore);
    console.log(totalScore);
    winningCondition();
})
// <---------------------------------------Crystal THREE------------------------------------------>
$("#crystal-three").on("click", function(){
    $("#crystal-three").val(crystalValues[2]);
    console.log($("#crystal-three").val());
    totalScore = totalScoreNum += crystalValues[2];
    $("#total-score").text("Your score: " + totalScore);
    console.log(totalScore);
    winningCondition();
})
// <---------------------------------------Crystal FOUR------------------------------------------>
$("#crystal-four").on("click", function(){
    $("#crystal-four").val(crystalValues[3]);
    console.log($("#crystal-four").val());
    totalScore = totalScoreNum += crystalValues[3];
    $("#total-score").text("Your score: " + totalScore);
    console.log(totalScore);
    winningCondition();
})



});

