'use strict';

//////////////////////////////////////////////
// PROTOTYPES
/*
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
*/

//////////////////////////////////////////////
// CHALLENGE - OOP #1

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is going at ${this.speed}km/h.`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is going at ${this.speed}km/h.`);
};

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

/* Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h */

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
