'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor, use PROTOTYPES
  // this.calcAge = function () {
  //   console.log(new Date().getFullYear() - birthYear);
  // };
  // ----
};

const leandro = new Person('Leandro', 1983);

// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype (creates .__proto__)
// 4. function automatically returns {}

console.log(leandro);

const chelem = new Person('Chelem', 1986);
const nina = new Person('Nina', 2014);
console.log(chelem, nina);
console.log(chelem instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

leandro.calcAge();
chelem.calcAge();
nina.calcAge();

console.log(leandro.__proto__);
console.log(leandro.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(leandro)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens'; // prototype property
console.log(leandro.species, chelem.species);

console.log(leandro.hasOwnProperty('firstName')); // true
console.log(leandro.hasOwnProperty('species')); //false

console.log(leandro.__proto__);
console.log(leandro.__proto__.__proto__); // Object.prototype (top of chain)
console.log(leandro.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 1, 2, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
