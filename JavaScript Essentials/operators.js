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

// console.log(result1, result2);
let name = "Rajesh";
let age = 30;
let codeJavaScript = true;

// console.log(
//   `Hello, My name is ${name}, I am ${age} years old and I can code JavaScript:${codeJavaScript} `
// );

// Subtraction
nr1 = 20;
nr2 = 4;
str1 = "Hi";
let nr3 = 3;
result1 = nr1 - nr2;
result2 = str1 - nr3; // Number cannot be substracted from a string, results NaN
// console.log(result1, result2);

// Multiplication
nr1 = 15;
nr2 = 10;
str1 = "Hi";
nr3 = 3;
str2 = "10";
result1 = nr1 * nr2; //150
result2 = str1 * nr3; //NaN
let result3 = str2 * nr3; //30
// console.log(result1, result2, result3);

// Division
nr1 = 30;
nr2 = 5;
result1 = nr1 / nr2;
// console.log(result1);

// Exponentiation
// Exponentiation means raising a certain base number to the power of the exponenet.
// operator **
nr1 = 2;
nr2 = 3;
result1 = nr1 ** nr2;
// console.log(result1);

//Modulus
// Modulus is the remainder of two numbers divided each other

nr1 = 10;
nr2 = 3;
result1 = nr1 % nr2; // 10%3 = 1(Remainder)
// console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 8;
nr2 = 2;
result1 = nr1 % nr2;
// console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 15;
nr2 = 4;
result1 = nr1 % nr2;
// console.log(`${nr1}%${nr2}=${result1}`);

nr1 = 50;
nr2 = 100;
result1 = nr1 % nr2;
// console.log(`${nr1}%${nr2}=${result1}`);

// Unary Operators
// Increment and Decrement operator

nr1 = 2;
// console.log(nr1++); //Post Increment
// console.log(nr1);

nr1 = 2;
// console.log(++nr1); //Pre Increment

nr1 = 2;
// console.log(nr1--); //Post Decrement
// console.log(nr1);

nr1 = 2;
// console.log(--nr1); // Pre Decrement

// Combining the operators
// Executed as per the operator precedence in JavaScript
// Precedence order
/* 1. The operations between the paranthesis have the highest precedence
2. The order of operations takes place based on the type of operation(Highest precedence first), if the they are of equal precedence, they take place from left to right */

console.log((1 + 1) * 3 ** 2);

// Order of precedence
/* 1. Grouping            (...) Ex:(x-y) -> Anything in between paranthesis has highest preference
2. Exponentiation       **  Ex: x**y
3. Prefix Increment and Decrement --,++  Ex: ++x, --y
4. Multiplication, Division, Modulus *, /, % Ex: x*y,x/y, x%y
5. Addition and Subtraction +, -  Ex: x+y, x-y */

// Practice exercise 2.3
// Calculate the length of the third side for a right angle triagnle where a^2 + b^2 = c^2
// let a = prompt("Enter length of side a:");
// let b = prompt("Enter length of side b:");
// let c = Math.sqrt(a * a + b * b);
// console.log(`If a is ${a} and b is ${b}, then c is ${c}`);

// Assignment operators
let x = 12;
x += 2;
console.log(`x:${x}`);

x -= 2;
console.log(`x:${x}`);

x *= 6;
console.log(`x:${x}`);

x /= 3;
console.log(`x:${x}`);

x **= 3;
console.log(`x:${x}`);

x %= 3;
console.log(`x:${x}`);

// Comparison Operators
// 1. Equality check
// 2. Not Equal
// 3. Greater than and Less than operator

// Equality check operator
x = 10;
let xStr = "10";
console.log(x === xStr);
let y = 10;
console.log(x === y);

// Not Equality check operator
let trueCheck = true;
let falseCheck = false;

console.log(trueCheck !== falseCheck);
console.log(x !== xStr);
console.log(x !== y);

// Greater than and Smaller Operators
let a = 10;
let b = 15;
console.log(a > b);
console.log(a < b);
let testString1 = "String";
let testString2 = "string";
console.log(testString1 < testString2);

let c = 15;
console.log(a >= c);
console.log(b <= c);
