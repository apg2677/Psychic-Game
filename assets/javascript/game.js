var wins = 0;
var losses = 0;
var gNum = 0;
var guesses = [];
var done = false;
var rndChar = Math.floor(Math.random() * 26 + 97);
// var divAnswer = document.getElementsByClassName("divAnswer");
var answers = [];
var lastAnswerIndex;
var lastAnswer;
var divAnswerVal = document.getElementById("divAnswerVal");

document.onkeypress = function(event) {

    var tempKeyCode = event.keyCode;
    var tempChar = String.fromCharCode(tempKeyCode);
    var used = guesses.indexOf(tempChar);
    var rndCharVal = String.fromCharCode(rndChar);
    answers.push(rndCharVal);
    
    console.log(answers);
    console.log("rndChar: " + rndChar);
    console.log("tempKeyCode: " + tempKeyCode);
    
    lastAnswerIndex = answers.length-1;
    lastAnswer = answers[lastAnswerIndex];
    divAnswerVal.innerHTML = lastAnswer;
    
    if(tempKeyCode==rndChar) {
        wins++;
        divAnswerVal.style.display = "block";
        document.getElementById("wins").innerHTML = wins;
        ResetChar();
        ResetGuesses();

    }
    else if (used < 0) {
        guesses.push(tempChar);
        document.getElementById("guesses").innerHTML = guesses.toString();
        gNum++;
        document.getElementById("gNum").innerHTML = gNum;
        if (gNum == 9 ) {
            losses++;
            ResetChar();
            ResetGuesses();

            document.getElementById("losses").innerHTML = losses;
        }
    }

    else {

       
    }
    function ResetChar() {
        answers.push(rndCharVal);
        rndChar = Math.floor(Math.random() * 26 + 97);
        var tempChar2 = String.fromCharCode(rndChar);
        
    }

    function ResetGuesses() {
        guesses = [];
        gNum = 0;
        document.getElementById("guesses").innerHTML = guesses;
    }
}