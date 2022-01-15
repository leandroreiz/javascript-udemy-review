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

// Static method
Person.hey = function () {
  console.log(`Hey there 😎`);
};
Person.hey();
// leandro.hey(); // this doesn't work

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

//////////////////////////////////////////////
// ES6 CLASSES

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be automatically added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Seja bem-vindo ${this.fullName}!`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static holla() {
    console.log(`Holla ✋🏼`);
  }
}

const andre = new PersonCl('Andre Reis', 1985);
console.log(andre);
andre.calcAge();

console.log(andre.__proto__ === PersonCl.prototype); // true

// linking to the PersonCl prototype
// PersonCl.prototype.greet = function () {
//   console.log(`Seja bem-vindo ${this.firstName}!`);
// };

andre.greet();
console.log(andre.age);
console.log(andre.fullName);

const jonas = new PersonCl('Jonas Schmedtmann', 1965);

//////////////////////////////////////////////
// SETTERS AND GETTERS

const account = {
  owner: 'Leandro',
  movements: [200, 340, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

PersonCl.holla();

//////////////////////////////////////////////
// OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1984;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 43
*/

//////////////////////////////////////////////
// CHALLENGE - OOP #1
/*
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

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
*/
//////////////////////////////////////////////
// CHALLENGE - CLASSES #2

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed}km/h.`);
  }

  break() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed}km/h.`);
  }

  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUS(mph) {
    this.speed = mph * 1.6;
  }
}

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.break();
ford.accelerate();
ford.speedUS = 100;
console.log(ford);
