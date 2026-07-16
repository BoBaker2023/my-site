console.log("JavaScript loaded");


function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


let secretNumber = generateSecretNumber();

let guesses = 0;



const input = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("messages");
const counter = document.getElementById("guessCount")


guessButton.addEventListener("click", function () {
       let guess = Number(input.value)
       guesses = guesses + 1;
       counter.textContent = `Guesses: ${guesses}`;


       if(guess < secretNumber) {
         message.textContent = "Too low";
       } else if (guess > secretNumber) {
         message.textContent = "Too high";
       }
       else{
        message.textContent = `Correct! You got it in ${guesses} guesses!`;
        guessButton.disabled = true;
       }

})

resetButton.addEventListener("click", function () {
    secretNumber = generateSecretNumber();
    guesses = "";
    input.value = 0;
    guessButton.disabled = false;
    counter.textContent = `Guesses: ${guesses}`;
    message.textContent = "Make a guess!"
});

