'use strict';
const currentYear = new Date().getFullYear();

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


///////////////////////////////////
// THIS KEYWORD

console.log(this);

// Function Declaration
const calcAge = function (birthYear) {
  console.log(currentYear - birthYear);
  console.log(this); // undefined
};
calcAge(1983);

// Arrow Functions
const calcAgeArrow = birthYear => {
  console.log(currentYear - birthYear);
  console.log(this); // window object
};
calcAgeArrow(1986);

// Methods
const person = {
  birthYear: 1983,
  calcAge: function () {
    console.log(`Value of THIS keyword:`);
    console.log(this);
    console.log(currentYear - this.birthYear);
  },
};
person.calcAge();

const employee = {
  birthYear: 1986,
};

// Borrowing the method from person
employee.calcAge = person.calcAge;
employee.calcAge();

const f = person.calcAge;
f();

///////////////////////////////////
// REGULAR VS. ARROW FUNCTIONS

// Using VAR the variable is created in the Global Score
// var firstName = `USING VAR TO DECLARE A VARIABLE`;

const person = {
  firstName: 'Leandro',
  birthYear: 1983,
  calcAge: function () {
    console.log(`Value of THIS keyword:`);
    console.log(this);
    console.log(currentYear - this.birthYear);

    // Solution 1 - Pre ES6 version
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    // Solution 2 - Using an arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };

    isMillenial(); // regular func call, 'this' is undefined
  },

  // TIP: do not use arrow functions as methods
  greet: () => console.log(`Hey ${this.firstName}`),

  // Using a normal function
  goodBye: function () {
    console.log(`Bye ${this.firstName}`);
  },
};

person.greet(); // Hey undefined (using the globalThis)
person.goodBye(); // Bye Leandro
person.calcAge();

///////////////////////////////////
// ARGUMENTS KEYWORD

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 5, 8, 12);

// does not work with arrow functions
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(3, 6, 9); // arguments is not defined


///////////////////////////////////
// PRIMITIVE VS. OBJECTS (REFERENCE TYPES)

// JavaScript Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol and BigInt

// Objects: Obj Literal, Arrays, Functions, Many more...

let age = 38;
let oldAge = age;
age = 39;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Leandro',
  age: 38,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend); // 27
console.log('Leandro:', me); // 27
*/

// Primitive types
let lastName = 'Davis';
let oldLastName = lastName;
lastName = 'Smith';
console.log(lastName, oldLastName);

// Reference types
const person = {
  firstName: 'Joana',
  lastName: 'DiCaprio',
  age: 27,
};
const marriedPerson = person;
marriedPerson.lastName = 'Gates';
console.log('Before marriage:', person);
console.log('After marriage:', marriedPerson);
// marriedPerson = {}; // Assignment to constant variable

// Copying objects
const newPerson = {
  firstName: 'Joana',
  lastName: 'DiCaprio',
  age: 27,

  family: ['George', 'Jeff'],
};

// only works in the first level, no objs would be copied
const personCopy = Object.assign({}, newPerson);
personCopy.lastName = 'Jobs';

console.log('Before marriage (copy):', newPerson);
console.log('After marriage (copy):', personCopy);

personCopy.family.push('Mary');
personCopy.family.push('John');
console.log('Before marriage (copy):', newPerson);
console.log('After marriage (copy):', personCopy);
// the family object is not copied as expected
