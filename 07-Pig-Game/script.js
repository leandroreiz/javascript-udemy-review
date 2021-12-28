'use strict';

//////////////////////////////////////////////////
// Selectors and global variables

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');
const player1TotalScore = document.getElementById('score--0');
const player2TotalScore = document.getElementById('score--1');

let diceNumber = 0;
let p1Score = 0;
let p2Score = 0;
let currentPlayer = '';
let currentScore = 0;

//////////////////////////////////////////////////
// Functions

// New game
const newGame = function () {
  dice.classList.add('dice--hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  currentPlayer = 'player1';
  currentScore = 0;
  p1Score = 0;
  p2Score = 0;
  resetScores();
};

// Roll dice
const rollDice = function () {
  return Math.trunc(Math.random() * 6 + 1);
};

// Display the number rolled
const displayDiceRoll = function (rolledNumber) {
  if (dice.classList.contains('dice--hidden')) {
    dice.classList.remove('dice--hidden');
  }
  dice.src = `dice-${rolledNumber}.png`;
};

// Switch player if rolled a 1
const shouldSwitchPlayer = function (rolledNumber, player) {
  if (rolledNumber === 1) {
    if (player === 'player1') {
      currentPlayer = 'player2';
      currentScore = 0;
      displayScore(currentScore, 'player1');
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      currentPlayer = 'player1';
      currentScore = 0;
      displayScore(currentScore, 'player2');
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  } else {
    updateCurrentScore(rolledNumber);
    displayScore(currentScore, currentPlayer);
  }
};

// Add to the current score
const updateCurrentScore = function (score) {
  currentScore += score;
};

// Add current score to total score
const updateTotalScore = (score, player) => {
  if (player === 'player1') {
    p1Score += score;
  } else {
    p2Score += score;
  }
};

// Update the scores displayed on screen
const displayScore = function (score, player) {
  if (player === 'player1') {
    player1CurrentScore.textContent = score;
    player1TotalScore.textContent = p1Score;
  } else {
    player2CurrentScore.textContent = score;
    player2TotalScore.textContent = p2Score;
  }
};

// Reset all scores
const resetScores = function () {
  player1CurrentScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player2TotalScore.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};

// Check if the active player won the game
const isWinner = function (player) {
  if (player === 'player1' && p1Score >= 10) {
    player1.classList.add('player--winner');
    disableBtns();
  } else if (player === 'player2' && p2Score >= 10) {
    player2.classList.add('player--winner');
    disableBtns();
  }
};

const disableBtns = function () {
  btnRoll.disabled = true;
  btnHold.disabled = true;
};

//////////////////////////////////////////////////
// Game Logic

// Start the game
newGame();

// Roll Dice
btnRoll.addEventListener('click', () => {
  diceNumber = rollDice();
  displayDiceRoll(diceNumber);
  shouldSwitchPlayer(diceNumber, currentPlayer);
});

// Hold
btnHold.addEventListener('click', () => {
  updateTotalScore(currentScore, currentPlayer);
  isWinner(currentPlayer);
  shouldSwitchPlayer(1, currentPlayer);
});

// New Game
btnNew.addEventListener('click', () => {
  newGame();
});
