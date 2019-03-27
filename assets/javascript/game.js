var wins = 0;
var losses = 0;
var gNum = 0;
var guesses = [];
var done = false;
var rndChar = Math.floor(Math.random() * 26 + 97);
var rndCharVal = String.fromCharCode(rndChar);

var answers = [];
answers.push(rndCharVal);
var lastAnswerIndex;
var lastAnswer;
var divAnswerVal = document.getElementById("divAnswerVal");

document.onkeypress = function(event) {

    var tempKeyCode = event.keyCode;
    var tempChar = String.fromCharCode(tempKeyCode);
    var used = guesses.indexOf(tempChar);
    
    
    
    writeStatus(tempKeyCode);
    
    GetLastAnswer();
    
    if(tempKeyCode==rndChar) {
        wins++;
        answers.push(rndCharVal);
        GetLastAnswer();
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
            divAnswerVal.style.display = "block";
            losses++;
            answers.push(rndCharVal);
            GetLastAnswer();
            ResetChar();
            ResetGuesses();

            document.getElementById("losses").innerHTML = losses;
        }
    }

    else {

       
    }
    function ResetChar() {
        
        rndChar = Math.floor(Math.random() * 26 + 97);
        rndCharVal = String.fromCharCode(rndChar);
        // var tempChar2 = String.fromCharCode(rndChar);
        
    }

    function ResetGuesses() {
        guesses = [];
        gNum = 0;
        document.getElementById("guesses").innerHTML = guesses;
        // divAnswerVal.style.display = "none";
    }
}

function writeStatus(tempKeyCode) {
    console.log(answers);
    var tRnd = String.fromCharCode(rndChar);
    var tUser = String.fromCharCode(tempKeyCode);
    console.log("rndChar: " + tRnd);
    console.log("UserKeyCode: " + tUser);
}

function GetLastAnswer() {
    lastAnswerIndex = answers.length - 1;
    lastAnswer = answers[lastAnswerIndex];
    divAnswerVal.innerHTML = lastAnswer;
}
