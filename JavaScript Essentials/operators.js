// Arithmetic operators
// Addition
// Adding numbers result into number
// Adding strings will concatenate and results into a single string
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;

let str1 = "Hello ";
let str2 = "Addition!";
let result2 = str1 + str2;

console.log(result1, result2);
let name = "Rajesh";
let age = 30;
let codeJavaScript = true;

console.log(
  `Hello, My name is ${name}, I am ${age} years old and I can code JavaScript:${codeJavaScript} `
);

// Subtraction
nr1 = 20;
nr2 = 4;
str1 = "Hi";
let nr3 = 3;
result1 = nr1 - nr2;
result2 = str1 - nr3; // Number cannot be substracted from a string, results NaN
console.log(result1, result2);

// Multiplication
nr1 = 15;
nr2 = 10;
str1 = "Hi";
nr3 = 3;
str2 = "10";
result1 = nr1 * nr2; //150
result2 = str1 * nr3; //NaN
let result3 = str2 * nr3; //30
console.log(result1, result2, result3);

// Division
nr1 = 30;
nr2 = 5;
result1 = nr1 / nr2;
console.log(result1);

// Exponentiation
// Exponentiation means raising a certain base number to the power of the exponenet.
// operator **
nr1 = 2;
nr2 = 3;
result1 = nr1 ** nr2;
console.log(result1);

//Modulus
// Modulus is the remainder of two numbers divided each other

nr1 = 10;
nr2 = 3;
result1 = nr1 % nr2; // 10%3 = 1(Remainder)
console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 8;
nr2 = 2;
result1 = nr1 % nr2;
console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 15;
nr2 = 4;
result1 = nr1 % nr2;
console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 50;
nr2 = 100;
result1 = nr1 % nr2;
console.log(`${nr1}%${nr2}=${result1}`);
