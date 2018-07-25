//declare variables

var wins=0
var losses=0
var guessesMade= []
var guessesLeft=10
var letterArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];



//define reset function

function reset() {
    guessesMade=[]
    document.getElementById("guessessofar").innerHTML= guessesMade;
    guessesLeft=10
    document.getElementById("guessesleft").innerHTML= guessesLeft;
    randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
}



//user clicks on a letter

document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();
    console.log("Guess: " + userGuess);
    console.log("Correct letter: " + randomLetter);


//if userGuess matches random letter then add one to wins and reset 

    if (userGuess === randomLetter){
        wins++;
        document.getElementById("wins").innerHTML= wins;
        console.log("You WIN!")
        reset()
    }

 //else if no match put userguess under guesses so far and remove a guess (nested if- guessesleft=0 add one to losses and reset

    else if (userGuess !== randomLetter){
        guessesMade.push(userGuess);
        document.getElementById("guessessofar").innerHTML= guessesMade;
        guessesLeft--;
        document.getElementById("guessesleft").innerHTML= guessesLeft;
        if (guessesLeft === 0){
        losses++;
        document.getElementById("losses").innerHTML= losses;
        console.log("You LOSE!")
        reset()

        }
    }


}
   