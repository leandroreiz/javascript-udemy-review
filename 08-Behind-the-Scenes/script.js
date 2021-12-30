'use strict';
/*
///////////////////////////////////
// SCOPE IN JAVASCRIPT
const currentYear = new Date().getFullYear();

function calcAge(birthYear) {
  const age = currentYear - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} and born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Jonas';

      const str = `Oh, you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // reassigning outer scope's variable
      output = 'NEW OUTPUT!';
    }
    // console.log(str); // reference error
    console.log(millenial); // var variables are func scoped
    // console.log(add(2, 3)); // reference error if using strict, works if not
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Leandro';
calcAge(1983);
// console.log(age); // reference error
// printAge(); // reference error
*/
///////////////////////////////////
// HOISTING

// Variables
console.log(me); // hoisted to the value 'undefined'

// Cannot access 'job' before initialization
// console.log(job);
// console.log(birthYear);

var me = 'Leandro';
let job = 'Coder';
const birthYear = 1983;

// Functions

// console.log(addDeclaration(2, 3));
// 5

// console.log(addExpression(2, 3));
// Cannot access 'addExpression' before initialization

// console.log(addArrow(2, 3));
// addArrow is not a function

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Another example
// numProducts at this point is undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// More About Variables
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
