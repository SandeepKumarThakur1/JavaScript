let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter Valid Number`);
    } else if (guess < 1) {
        alert(`Please Enter More than 1`);
    } else if (guess > 100) {
        alert(`Please Enter Less than 100`)
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            diplayGuess(guess)
            diplayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        } else {
            diplayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        diplayMessage(`You Guessed it Right`)
        endGame()
    } else if (guess < randomNumber) {
        diplayMessage(`Number is Too Low Try Again`)
    } else if (guess > randomNumber) {
        diplayMessage(`Number is Too High Try Again`)
    }
}

function diplayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function diplayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.style.background = "#000";
    p.style.padding = '0.8rem 2rem';
    p.style.color = "#fff";
    p.style.cursor = "pointer";
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}