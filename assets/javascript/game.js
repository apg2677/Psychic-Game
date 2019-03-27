var wins = 0;
var losses = 0;
var gNum = 0;
var guesses = [];
var done = false;
var rndChar = Math.floor(Math.random() * 26 + 97);
// var divAnswer = document.getElementsByClassName("divAnswer");
var answers = [];

document.onkeypress = function(event) {

    var tempKeyCode = event.keyCode;
    var tempChar = String.fromCharCode(tempKeyCode);
    var used = guesses.indexOf(tempChar);
    var rndCharVal = String.fromCharCode(rndChar);
    
   
    console.log(answers);
    console.log("rndChar: " + rndChar);
    console.log("tempKeyCode: " + tempKeyCode);
    var divAnswerVal = document.getElementById("divAnswerVal");
    divAnswerVal.innerHTML = answers;
    
    if(tempKeyCode==rndChar) {
        wins++;
      
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