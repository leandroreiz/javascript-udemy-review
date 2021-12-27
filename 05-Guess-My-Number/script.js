'use strict';
////////////////////////////////////////////////////
// GLOBAL VARIABLES

// Generating a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Initializing variables
let score = 20;
let highScore = 0;

////////////////////////////////////////////////////
// FUNCTIONS

// Display a message for the user
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Set the score according to the argument passed
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Winner winner chicken dinner!
const winner = function () {
  displayMessage(`Correct number!`);
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = '#60b347';

  // Set the high score
  if (highScore < score) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const resetGame = function () {
  // Resetting the variables
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  // ... the text content and input values
  document.querySelector('.number').textContent = `?`;
  displayMessage(`Start guessing...`);
  displayScore(score);
  document.querySelector('.guess').value = ``;

  // ... the styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

////////////////////////////////////////////////////
// GAME LOGIC

// What happens when pressing the 'Check!' button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // No player input
  if (!guess) {
    displayMessage(`Enter a number!`);
    // Winner
  } else if (guess === secretNumber) {
    winner();
    // Guess is different from secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      displayScore(score);
    } else {
      displayMessage(`You lost the game!`);
      displayScore(0);
    }
  }
});

// Play again!
document.querySelector('.again').addEventListener('click', () => {
  resetGame();
});
