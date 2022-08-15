let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["Black", "Orange", "Pink"];

console.log(arr1);
console.log(arr2);

let arr3 = new Array(10);
let arr4 = [10];
console.log(arr3);
for (let i = 0; i < arr3.length; i++)
  console.log(`index ${i}'s value : ${arr3[i]}`);
console.log(arr4);

let arr = ["hi", "there", 5, true, NaN, undefined];
for (let i = 0; i < arr.length; i++) console.log(typeof arr[i]);

// Array using const

const arr5 = ["hi there"];
arr5[0] = "new value";
console.log(arr5[0]);

arr5 = ["Changing the const full array value"];
