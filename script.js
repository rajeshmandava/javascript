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

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("This is logger function");
}

logger();
logger();
logger();

function add(val1, val2) {
  const sum = val1 + val2;
  return sum;
}

const sumOfSums = add(add(3, 4), add(6, 9));
console.log(sumOfSums);
