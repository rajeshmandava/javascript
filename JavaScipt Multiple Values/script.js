let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["Black", "Orange", "Pink"];

// console.log(arr1);
// console.log(arr2);

let arr3 = new Array(10);
let arr4 = [10];
// console.log(arr3);
// for (let i = 0; i < arr3.length; i++)
// console.log(`index ${i}'s value : ${arr3[i]}`);
// console.log(arr4);

let arr = ["hi", "there", 5, true, NaN, undefined];
// for (let i = 0; i < arr.length; i++) console.log(typeof arr[i]);

// Array using const

// const arr5 = ["hi there"];
// arr5[0] = "new value";
// console.log(arr5[0]);

// arr5 = ["Changing the const full array value"];

// Accessing Elements
let cars = ["Porsche", "BMW", "Mercedes", "Volkswagen", "McLaren"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);

// Negative index values
// console.log(cars[-1]);
// console.log(cars[-2]);
// console.log(cars[-3]);
// We didn't a value to negative indexes in arrays So, when requested values for negative indexes, the returned value is undefined

//Overwriting Elements
cars[0] = "Tesla";
cars[1] = "Volvo";
cars[2] = "Polestar";

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

cars[-1] = "Kia";
cars[-2] = "Toyota";
cars[-3] = "Hyundai";
// console.log(cars[-1]);
// console.log(cars[-2]);
// console.log(cars[-3]);

//Built-in length property
let colors = ["purple", "white", "Red", "Blue", "Green"];
let boolean = [true, false, true, true, false, true, false, false, false];
let emptyArray = [];

// console.log(`Length of colors array:${colors.length}`);
// console.log(`length of boolean array:${boolean.length}`);
// console.log(`length of emptyArray:${emptyArray.length}`);

// console.log(`last element of boolean array is ${boolean[boolean.length - 1]}`);
// console.log(`last element of colors array is ${colors[colors.length - 1]}`);

let numbers = [12, 24, 36];
numbers[5] = 72;
// console.log(numbers);

// Practice exercise 3.1
// let shoppingList = ["Milk", "Bread", "Apples"];
// // console.log(`length of shoppingList array is ${shoppingList.length}`);
// shoppingList[1] = "Bananas";
// // console.log(shoppingList);

// shoppingList.push("Ornages");
// // console.log(shoppingList);

// // Adding array of elements at a certain index
// shoppingList.splice(2, 0, "Coffee", "Coke");
// console.log(shoppingList);
// console.log(shoppingList.push("Fish"));

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

//The first parameters in splice funtion is the starting index
// The second parameter in splice function is to delete the elements in the array
arrOfShapes.splice(2, 4, "1", "2");
// console.log(arrOfShapes);

// concat() function
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
// console.log(arr7);
let arr8 = arr7.concat(7);
// console.log(arr8);
let arr9 = arr8.concat(8, 9, 10);
// console.log(arr9);

// Deleting the array elements

// pop() function: pops last element from the array
// console.log(arr9.pop());
// console.log(arr9);

// shift() : Deletes the first element of the array and shift all elements by their indices by one

arr9.shift();
// console.log(arr9);

// splice() : takes two params
// 1st : starting index to delete elements
// 2nd : Last index to delete elements

arr9.splice(1, 2);
// console.log(arr9);

// delete keywoord removes the element and replaces with an empty element in the array.
delete arr9[1];
// console.log(arr9);

// Finding Elements

arr9 = [1, 2, 3, 4, 5];
console.log(arr9);
let findValue = arr9.find(function (e) {
  return e === 5;
});
let findValue2 = arr9.find((e) => e === 10);
// console.log(findValue, findValue2);

// console.log(arr9.indexOf(2, 0));

// Sorting array elements
let names = ["James", "Alicia", "William", "Maria", "Annie"];
names.sort();
// console.log(names);

let ages = [18, 72, 22, 90];
ages.sort();
// console.log(ages);

// Reversing array elements
ages.reverse();
// console.log(ages);

// Practice exercise 3.2

let shoppingList = [];
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

shoppingList.splice(1, 1, "Bananas", "Eggs");
// console.log(shoppingList);
shoppingList.pop();
// console.log(shoppingList);
shoppingList.sort();
let indexOfMilk = shoppingList.indexOf("Milk");
let indexOfBananas = shoppingList.indexOf("Bananas");
shoppingList.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
let newShoppingList = ["Juice", "Pop"];
shoppingList = shoppingList.concat(newShoppingList).concat(newShoppingList);
console.log(shoppingList);

// Multidimensional arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);
console.log(arrOfArrays[1][2]);
let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);
console.log(arrOfArraysOfArrays[0][1]);

// Practice exercise 3.3

let num = [1, 2, 3];
let arrOfNum = [num, num, num];
console.log(arrOfNum[2]);
