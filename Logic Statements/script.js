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

console.log(message);
console.log(`Your total cost is ${cost}`);

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
let inputAge = Number(prompt("Enter your age"));

if (age >= 21) {
  message = " You are allowed to enter and allowed to purchase alcohol";
} else if (age >= 19) {
  message = "You are allowed to enter but not allowed to purchase alcohol";
} else {
  message = "You are not allowed to enter";
}
console.log(message);
