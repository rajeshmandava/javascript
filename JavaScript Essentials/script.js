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

//Number: 64-bit floating point number
// Can save large numbers including signed, unsigned, numbers with decimals and more
// Number can be used to represent decimals, exponentials, octal, hexadecimal and binary numbers.

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10;
let hexNr = 0x3e8;
let binNr = 0b101;
console.log(intNr, decNr, expNr, octNr, hexNr, binNr);
let intNr2 = 3434;
let intNr3 = -11000;
console.log(intNr2, intNr3);
let decNr2 = 22.8278;
let binNr2 = 0b10101010;
console.log(decNr2, binNr2);
