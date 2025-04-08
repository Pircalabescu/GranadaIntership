/* Generating the number */

/* Math.random generates a random number between 0 and 1 (decimal) (0.2, 0.765, 0.998..) */
/* Math.floor remove the decimals */

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


/* save the references to each paragraph */
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');


// save button input references

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');


// variable for attempts
let guessCount = 1;

// variable for creating the reset button
let resetButton;

//Function to verify the number
function checkGuess(){
    //we save the entered number and make sure that it is the correct type of number
    let userGuess = Number(guessField.value);

    //check if we are in the first attempt
    if( guessCount === 1){
        guesses.textContent = "Previous attempts: ";
    }
    guesses.textContent += userGuess + " ";

    //block to check whether we have guessed the random number or not
     if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations, it is correct !";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
     } else if (guessCount === 10){
        lastResult.textContent="GAME OVER !";
        setGameOver();
     } else { 
        lastResult.textContent="Incorrect. Try again !";
        lastResult.style.backgroundColor = "red";
        // We check if the number is bigger or smaller than the random number, to help the player.
        if(userGuess < randomNumber){
            lowOrHigh.textContent = "The number is bigger.";
        } else if ( userGuess > randomNumber){
            lowOrHigh.textContent = "The number is smaller.";
        }
     }

    // We prepare the variables for the next attempt
        guessCount++;
    //we empty the value of the numeric field
        guessField.value = "";
    //we apply the focus again to the input
        guessField.focus();                     
}


//add a listener to guess Submit button
guessSubmit.addEventListener('click', checkGuess);


//Creating the game over function

function setGameOver(){
    guessField.disabled = true; // Disable the input
    guessSubmit.disabled = true; // Disable the button

    //Creating a new button for reset the game
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = "Restart Game";

    //Placing the button in the body
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


//creating the reset game function
function resetGame(){
    guessCount = 1;

    //take off all the help paragraphs 
    const resetParas = document.querySelectorAll('.finalResult p');
    for (let i=0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'aliceblue';
    }

    //removing the restart button
    resetButton.parentNode.removeChild(resetButton);


    //reactivating the submit button and the guessfield
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'aliceblue';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}