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

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
  console.log("New game button");
};
init();
document.querySelector(".btn--new").addEventListener("click", init);

diceElement.classList.add("hidden");
score0Element.textContent = 0;
score1Element.textContent = 0;

bntRoll.addEventListener("click", function () {
  //Rolling dice functionality
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;

    //Check for rolled === 1; if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    console.log("Hold Button");
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      diceElement.classList.add("hidden");
    }
    switchPlayer();
  }
});
