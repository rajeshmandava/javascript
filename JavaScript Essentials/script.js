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
