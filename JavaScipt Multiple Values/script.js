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
let shoppingList = ["Milk", "Bread", "Apples"];
// console.log(`length of shoppingList array is ${shoppingList.length}`);
shoppingList[1] = "Bananas";
// console.log(shoppingList);

shoppingList.push("Ornages");
// console.log(shoppingList);

// Adding array of elements at a certain index
shoppingList.splice(2, 0, "Coffee", "Coke");
// console.log(shoppingList);
console.log(shoppingList.push("Fish"));

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

//The first parameters in splice funtion is the starting index
// The second parameter in splice function is to delete the elements in the array
arrOfShapes.splice(2, 4, "1", "2");
console.log(arrOfShapes);

// concat() function
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7);
console.log(arr8);
let arr9 = arr8.concat(8, 9, 10);
console.log(arr9);
