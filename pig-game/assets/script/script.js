'use strict';

// Selecting Elements
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Score Values
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentPl0 = document.querySelector('#current--0');
const currentPl1 = document.querySelector('#current--1');
const body = document.querySelector('body');

let scores, currentScore, activePlayer, playing;

const startCondition = function () {
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentPl0.textContent = 0;
  currentPl1.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
startCondition();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const winnerState = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  btnRoll.classList.add('hidden');
  btnHold.classList.add('hidden');
};
//Starting Conditions

// New Game

btnNew.addEventListener('click', startCondition);
// Roll Dice
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if score >= 100 and finish game
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
    } else {
      // if not switch to next player

      switchPlayer();
    }
  }
});
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating a random number
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Displaying number
    diceEl.classList.remove('hidden');
    diceEl.src = `assets/img/dice-${dice}.png`;
    // Check if rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
//
