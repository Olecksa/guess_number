let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
        previousGuesses.push(guess);
        if (numGuesses === 5){
            displayGuesses(guess);
            displayMessage(`Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
            }
        }
    }
    function checkGuess(guess){
        if (guess === randomNumber){
            displayMessage(`You guessed correctly!`);
            endGame();
        } else if (guess < randomNumber) {
            displayMessage(`Number is to low!`);
        } else if (guess > randomNumber) {
            displayMessage(`Number is to high!`);
        }
    }
    function displayGuesses(guess){
        userInput.value = '';
        guessSlot.innerHTML += `${guess}  `;
        numGuesses++
        remaining.innerHTML = `${6 - numGuesses}  `;
    }
    function displayMessage(message){
            lowOrHi.innerHTML = `<h1>${message}</h1>`
    }
    function endGame(){
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start new game</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${6 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
restartBtn.addEventListener('click', function(e){
randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${6 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}