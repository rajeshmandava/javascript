"use strict";

// console.log(document.querySelector(".message"));
// document.querySelector(".message").textContent = "Correct Number🎉";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  console.log(guess, secretNumber);

  //When there is no input
  if (!guess) {
    displaymessage("No Number!");
    //Player Wins
  } else if (guess === secretNumber) {
    displaymessage("🎉 Correct Number!!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //Too Low
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displaymessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😞 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   //Too High
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😞 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage("Start Guessing ...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  console.log(secretNumber);
});
