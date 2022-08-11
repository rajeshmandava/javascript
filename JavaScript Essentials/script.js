//Declaring variables
// var, let and const

//var :var has global scope
//let :let has block scope
//const : Variables created using const cannot be reassigned.

var x = 100;
{
  let x = 10;
  console.log(x);
}
console.log(x);
const y = 5;
// y = 10; // Assigning to const variable in an error(Assignment to constant variable)

//Primitive Data Types:
/* 1.String
2.Number
3.BigInt
4.Boolean
5.Symbol
6.Undefined
7.null */

// String Declaration types
/* 1. Single Quotes 
2. Double Quotes
3. Templated strings */
let singleString = "Hi there!";
let secondString = "Second string";
let thirdString = "Third String";
let singleQuoteUsage = 'This is Rajesh"s house';
console.log(singleQuoteUsage);

console.log(singleString, secondString, thirdString);
console.log(`${singleString}`);

// Escape characters
let str = 'Hello, What\'s your name? Is it "Mike"?';
console.log(str);
//Using prettier extension so the usage of correct quotes is taken care automatically
