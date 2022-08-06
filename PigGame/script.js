"use strict";

//Selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const bntRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const resetNewGame = function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  console.log("New game button");
};
document.querySelector(".btn--new").addEventListener("click", resetNewGame);

diceElement.classList.add("hidden");
score0Element.textContent = 0;
score1Element.textContent = 0;

bntRoll.addEventListener("click", function () {
  //Rolling dice functionality

  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;
  console.log(dice);

  //Check for rolled === 1; if true, switch to next player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    console.log(`currentScore: ${currentScore}`);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
  }
});

btnHold.addEventListener("click", function () {
  score0Element.textContent = currentScore;

  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
});
