var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var guessed = [];

var guessesLeft = 9;

var wins = 0;

var losses = 0;

var targetLetter;

function getTarget() {
    
    targetLetter = letters[Math.floor(Math.random()*letters.length)]
    console.log(targetLetter);
    return targetLetter;
}

function guessedLetters() {
    document.querySelector("#guessed").innerHTML = "Letters guessed: " + guessed.join(',  ');
}

function guessesRemaining() {
    document.querySelector("#guesses").innerHTML = "Guesses remaining: " + guessesLeft;
}

function loseGame() {
    empty();
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
  
}

function winGame() {
    empty();
  
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    
}

function empty() {
    guessed.length = 0;
   
}

getTarget();


document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    if (guessesLeft > 0) {
        if (userInput !== targetLetter) {
            guessed.push(userInput);
            guessesLeft -= 1;
            guessedLetters();
            guessesRemaining();
            console.log("guessed " + userInput + " guesses left: " + guessesLeft + " you've guessed: " + guessed);
        } else {
            guessed.push(userInput);
            guessedLetters();
            
            wins += 1;
            
            winGame();
            guessedLetters();
            getTarget();
            guessesLeft = 9;
            guessesRemaining();
            console.log("you won, wins: " + wins); 
            empty() 
        }
    } else {
        guessed.push(userInput);
        guessedLetters();
        losses += 1;
       loseGame();
       guessedLetters();
        getTarget();
        guessesLeft = 9;
        guessesRemaining();
        
        console.log("you ran out of guesses, losses: " + losses);
        
    }
    
}
