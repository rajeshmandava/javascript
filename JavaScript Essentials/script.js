//Declaring variables
// var, let and const

//var :var has global scope
//let :let has block scope
//const : Variables created using const cannot be reassigned.

var x = 100;
{
  let x = 10;
  // console.log(x);
}
// console.log(x);
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
// console.log(singleQuoteUsage);

// console.log(singleString, secondString, thirdString);
// console.log(`${singleString}`);

// Escape characters
let str = 'Hello, What\'s your name? Is it "Mike"?';
// console.log(str);
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
// console.log(intNr, decNr, expNr, octNr, hexNr, binNr);
let intNr2 = 3434;
let intNr3 = -11000;
// console.log(intNr2, intNr3);
let decNr2 = 22.8278;
let binNr2 = 0b10101010;
// console.log(decNr2, binNr2);

//BigInt
let bigNr = 232648763928493726847638764;
// console.log(bigNr);
bigNr = bigNr + intNr;
// console.log(bigNr);

let result = bigNr + intNr;
// console.log(result);

// Boolean
let bool1 = false;
let bool2 = true;

let objectIsDeleted = false;
let lightIsOn = true;

//Symbol
// Symbol is a brand new data type introduced in ECMA Script 6 or ES6
// Symbols can be used when it is important that variables are not equal, even though their value and type are the same

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";

// console.log("These two strings are the same:", str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");

// console.log("These two strings are the same:", sym1 === sym2);
//Each symbol is unique that is whay smy1 === sym2 is false

// Undefined
// JavaScript is very special language. It has a special data type for a variable that not been assigned a value and that data type is undefined.

let unassigned;
// console.log(unassigned);

// Purposefully assign an undefined value to a variable
let undefinedNr = undefined;
// console.log(undefinedNr);

// console.log("Checking the value equality:", unassigned === undefinedNr);

// null
// null is a special value for saying that a variable is empty or has unknown value.
// null is case sensitive. one should use lowercase for null.

let empty = null;
let terribleThingToDo = undefined;
let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
// console.log("Same null:", lastName === betterOption);

// lastName is undefined by default and to compare undefined with another variable to get false as result assign null to second variable

//Working out the type of variable
// typeof is an operator which returns the type of the variable

let testVariable = 1;

variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof testVariable;
// console.log(variableTypeTest1);

let str3 = "Hello!";
let nr = 10;
let undef = undefined;
let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool1", bool1);
// console.log("sym1", sym1);
// console.log("undef", undef);
// console.log("unknown", unknown);

// Converting data types
// The variables in JavaScript can change types. Sometimes JavaScript does this automatically

let nr1 = 2;
let nr2 = "2";
// console.log(nr1 * nr2); // JavaScript converts nr2 to Number results to 4
// console.log(nr1 + nr2); // JavaScript converts nr1 to string and concatenates strings results to '22'

// JavaScript has build-in functions we can use to convert the data type of the variable
// String(), Number() and Boolean()

// String()
// String converts a variable to type string.
// All values including null and undefined are converted to strings by putting quotes around it

let nr3 = 10.212981;
let sNr3 = String(nr3);
// console.log(typeof sNr3, sNr3);

unknown = null;
let sUnkown = String(unknown);
// console.log(typeof sUnkown, sUnkown);

let undefinedString;
// console.log(typeof undefinedString, undefinedString);

// Number()
// Number() tried to convert a variable to a number, if that cannot be done logically, it will change the value to NaN(Not a Number)
let unknownNumber;
let knownNumber = Number(unknownNumber);
// console.log(typeof knownNumber, knownNumber);

knownNumber = Number(sNr3);
// console.log(typeof knownNumber, knownNumber);

//Boolean()
// Boolean() converts everything to true except for null, undefined, 0(Number) and an empty string.

let booleanNull = null;
let booleanUndefined;
let booleanNumber = 0;
let booleanTestString = "";

// console.log(typeof booleanNull, booleanNull);
// console.log(typeof booleanUndefined, booleanUndefined);
// console.log(typeof booleanNumber, booleanNumber);
// console.log(typeof booleanTestString, booleanTestString);

let boolean = Boolean(booleanNull);
// console.log(typeof boolean, boolean);
boolean = Boolean(booleanUndefined);
// console.log(typeof boolean, boolean);
boolean = Boolean(booleanNumber);
// console.log(typeof boolean, boolean);
boolean = Boolean(booleanTestString);
// console.log(typeof boolean, boolean);

// Practice exercise 2.1
str1 = "Laurence";
str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

// console.log(typeof str1, str1);
// console.log(typeof str2, str2);
// console.log(typeof val1, val1);
// console.log(typeof val2, val2);
// console.log(typeof myNum, myNum);
