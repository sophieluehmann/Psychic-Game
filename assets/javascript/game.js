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
]

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

getTarget();


document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    if (guessesLeft > 0) {
        if (userInput !== targetLetter) {
            guessed.push(userInput);
            //document.body.querySelector("#guessed").innerHTML= userInput;
            guessesLeft -= 1;
            console.log("guessed " + userInput + " guesses left: " + guessesLeft + " you've guessed: " + guessed);
        } else {
            wins += 1;
            getTarget();
            guessesLeft = 9;
            console.log("you won")

        }
    } else {
        losses += 1;
        getTarget();
        guessesLeft = 9;
        console.log("you ran out of guesses")

    }
}
