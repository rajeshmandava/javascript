console.log("Test log ");

let rain = true;
if (rain) {
  console.log("** Taking my umbrella when I need to go outside **");
} else {
  console.log("** I can leave my umbrella at home **");
}

// Practice exercise 4.1

let trueCheck = true;
console.log(trueCheck);
if (trueCheck) {
  console.log(`trueCheck passes`);
} else {
  console.log(`trueCheck fails`);
}

trueCheck = false;
if (trueCheck) {
  console.log(`trueCheck passes`);
} else {
  console.log(`trueCheck fails`);
}

let age = 10;
let cost = 0;
let message;
if (age < 3) {
  cost = 0;
  message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = "with the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket costs 10 dollars";
} else {
  cost = 7;
  message = "A ticket is 7 dollars";
}

// console.log(message);
// console.log(`Your total cost is ${cost}`);

if (age < 3) {
  console.log("Access is free under three");
} else if (age < 12) {
  console.log("Witht the child discount, the fee is 5 dollars");
} else if (age < 65) {
  console.log("A regular ticket is 10 dollars");
} else if (age >= 65) {
  console.log("A ticket is 7 dollars");
}

// Practice exercise 4.2
// let inputAge = Number(prompt("Enter your age"));

if (age >= 21) {
  message = " You are allowed to enter and allowed to purchase alcohol";
} else if (age >= 19) {
  message = "You are allowed to enter but not allowed to purchase alcohol";
} else {
  message = "You are not allowed to enter";
}
// console.log(message);

// Practice ex: 4.3
let validId = true;
validId
  ? (message = "Allowed to Enter the premises")
  : (message = "Not allowed to enter");
console.log(message);

// Switch Statements
let activity = "Get up";
if (activity === "Get up") {
  console.log("It is 6.30PM");
} else if (activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if (activity === "Lunch") {
  console.log("It is 12:00PM");
} else if (activity === "Drive home") {
  console.log("It is 5:00PM");
} else if (activity === "Dinner") {
  console.log("It is 6.30PM");
}

// Now change activity into a switch statement
activity = "Luch";
switch (activity) {
  case "Get up":
    console.log("It is 6.30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00PM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6.30PM");
    break;
  default:
    console.log("I cannot determine the current time");
    break;
}

// Practice exercise 4.4
//Random number generator

let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let inputNum = Number(prompt("Enter your favorite ball from 0-5"));
switch (randomNumber) {
  case 0:
    message = "0  Ball";
    break;
  case 1:
    message = "1 Ball";
    break;
  case 2:
    message = "2 Ball";
    break;
  case 3:
    message = "3 Ball";
    break;
  case 4:
    message = "4 Ball";
    break;
  case 5:
    message = "5 Ball";
    break;
}
console.log(
  `Your choosen ball : ${inputNum} and computer choosen ball : ${randomNumber}`
);
