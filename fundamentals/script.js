// let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// // console.log("Rajesh Mandava");
// let firstName = "Rajesh";
// let secondName = "Mandava";
// // console.log(firstName + secondName);
// let isLand = false;
// let country = "India";
// let continent = "Asia";
// let population = "1.38 Billion";

// // console.log(
// //   "Country is " +
// //     country +
// //     " in continent " +
// //     continent +
// //     " with a population of " +
// //     population
// // );
// // console.log(isLand);
// let markWeight = 78,
//   markHeight = 1.89;
// let johnWeight = 92,
//   johnHeight = 1.95;

// let markBMI = markWeight / (markHeight * markHeight);
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;
// // console.log(markBMI, johnBMI, markHigherBMI);
// // if (markHigherBMI) {
// //   console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})`);
// // } else {
// //   console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})`);
// // }

// let job = "Software Engineer";
// let year = 2022;
// let birthYear = 1992;

// const rajesh = `I'm ${firstName} a ${year - birthYear} old`;
// // console.log(rajesh);
// // console.log(`String
// // second line
// // third line`);

// const age = 10;
// const isOldEnough = age >= 18;
// // if (isOldEnough) {
// //   console.log("Sarah can start driving license");
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// // }

// // //Type Conversion
// // const inputYear = "1992";
// // console.log(Number(inputYear) + 20, inputYear + 20);

// // console.log(Number("rajesh"));
// // console.log(typeof NaN);
// // console.log(String(200), 200);

// // Type Coercion
// // console.log("I am" + 23 + "years");
// // console.log("23" - "100" + 10);

// let n = "1" + 1;
// n = n - 1;
// // console.log(n);
// // console.log("10" - "4" - "3" - 2 + "5");

// //Falsy Values : 0, '', undefined, null, NaN
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean(""));
// // console.log(Boolean(null));
// // console.log(Boolean(NaN));

// //Equality operators (Strict check)=== vs ==(Loose check)
// const testAge = "18";
// // if (testAge === 18) console.log("Your age is 18 [Strict checking]");

// // if (testAge == 18) console.log("Your age is 18 [Loose checking]");

// // const favorite = Number(prompt("Whats your favorite number?"));
// // console.log(favorite);
// // console.log(typeof favorite);

// // if (favorite === 100) console.log("Cool! 100 is an amazing number");
// // else if (favorite === 7) console.log("7 is a cool number!");
// // else console.log("4 is also a cool number!");

// //Basic Boolean Logic: AND, OR and NOT Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;
// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);
// // console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// const isTired = false;
// // console.log(hasDriversLicense && hasGoodVision && isTired);
// // console.log(hasDriversLicense || hasGoodVision || isTired);
// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// let dolphins = (97 + 112 + 101) / 3;
// let koalas = (109 + 95 + 106) / 3;
// console.log(dolphins, koalas);
// if (dolphins > koalas && dolphins >= 100) {
//   console.log("dolphins won the Championship");
// } else if (dolphins < koalas && koalas >= 100) {
//   console.log("Koalas won the Championship");
// } else if (koalas === dolphins) {
//   console.log(" Championship is draw");
// }

// let val; /*Number(prompt("Enter a value"));*/
// switch (val) {
//   case 1:
//     console.log("Input is number 1");
//     break;
//   case 2:
//     console.log("Input is number 2");
//     break;
//   case 3:
//     console.log("Input is number 3");
//     break;
//   default:
//     console.log(`${val} does not have switch case`);
//     break;
// }
// //Ternary operator challange

// let bill = 1000;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total bill is ${
//     bill + tip
//   }`
// );

"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//   console.log("This is logger function");
// }

// logger();
// logger();
// logger();

// function add(val1, val2) {
//   const sum = val1 + val2;
//   return sum;
// }

// const sumOfSums = add(add(3, 4), add(6, 9));
// console.log(sumOfSums);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(2000);

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1993);
// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years `;
// };

// console.log(yearsUntilRetirement(2000, "John"));
// console.log(yearsUntilRetirement(1992, "Jerry"));

// let friends = ["John", "Jerry", "Tom"];
// console.log(friends);

// console.log(friends.shift());
// console.log(friends.unshift());
// console.log(friends);

// friends.push("steve");
// if (friends.includes("steve")) console.log("steve is in friends");

// console.log(friends.pop());
// console.log(friends);
// console.log(friends.entries());

// const rajesh = {
//   firstName: "rajesh",
//   lastName: "Mandava",
//   profession: "software developer",
//   birthYear: 1992,
//   friends: ["Charan", "kiran", "venkat"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   info: function () {
//     const data = `${this.firstName} is ${this.calcAge()}-year old, and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } driver license`;
//     return data;
//   },
// };
// // console.log(rajesh);

// // console.log(rajesh.firstName);
// // console.log(rajesh.lastName);

// // const nameKey = "Name";
// // console.log(rajesh["first" + nameKey]);
// // console.log(rajesh["last" + nameKey]);

// // const interestedIn = prompt(
// //   "What do you want to know about Rajesh? Choose between firstName, lastName, profession and friends"
// // );

// // if (rajesh[interestedIn]) console.log(rajesh[interestedIn]);
// // else
// //   console.log(
// //     "Wrong request! Choose between firstName, lastName, profession and friends"
// //   );

// // rajesh.location = "Sweden";
// // rajesh["linkedin"] = "@rajeshmandava";
// // console.log(rajesh);
// // console.log(
// //   `${rajesh.firstName} has ${rajesh.friends.length} friends and his best friend is ${rajesh.friends[0]}`
// // );

// console.log(rajesh.calcAge());
// console.log(rajesh.age);

// //Challange
// //"rajesh is 46-year old teacher, and he has a driver's license"

// console.log(rajesh.info());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
// } else {
//   console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
// }

console.log("Looping 1 time");
console.log("Looping 2 time");
console.log("Looping 3 time");
console.log("Looping 4 time");
console.log("Looping 5 time");
console.log("Looping 6 time");
console.log("Looping 7 time");
console.log("Looping 8 time");
console.log("Looping 9 time");
console.log("Looping 10 time");

for (let i = 1; i <= 10; i++) console.log(`looping ${i} time`);

const rajesh = [
  "Rajesh",
  "Mandava",
  2022 - 1992,
  "Software Developer",
  ["Charan", "Venkat", "Sai"],
  true,
];

const types = [];
for (let i = 0; i < rajesh.length; i++) {
  console.log(rajesh[i], typeof rajesh[i]);
  // types[i] = typeof rajesh[i];
  types.push(typeof rajesh[i]);
}
console.log(types);
