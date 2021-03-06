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

//////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: CONSTRUCTOR

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// leandro.calcAge(); // calcAge() is linked to the Person prototype

// Creating the connection to Person.prototype
Student.prototype = Object.create(Person.prototype);

// the connection above need to be done prior to creating new methods in Student.prototype, as the Object.create would erase previous methods
Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName} and I am a ${this.course} student!`
  );
};

const leandro = new Student('Leandro', 1983, 'Programming');
console.log(leandro);
leandro.introduce();
leandro.calcAge();

console.log(leandro.__proto__);
console.log(leandro.__proto__.__proto__);
console.log(leandro.__proto__.__proto__.__proto__);
console.log(leandro.__proto__.__proto__.__proto__.__proto__); // null

console.log(leandro instanceof Student); // true
console.log(leandro instanceof Person); // true
console.log(leandro instanceof Object); // true

console.dir(Student.prototype.constructor); // Person

// Set the constructor to the correct one
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // Student
console.log(leandro);

//////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: ES6 CLASSES

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

// Creating a new class inheriting from PersonCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.fullName} and I am a ${this.course} student!`
    );
  }

  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      }!`
    );
  }
}

const leonardo = new StudentCl('Leonardo Fernandes', 1975, 'Computer Science');
leonardo.introduce();
leonardo.calcAge();

//////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: OBJECT.CREATE

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
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
console.log(jay);
jay.init('Jay', 2001, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();

//////////////////////////////////////////////
// ANOTHER CLASS EXAMPLE
// ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
// ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS

// Protected property convention
// _propertyName

// Public fields
// Private fields
// Public methods
// Private methods
// (there is also the static version)

class Account {
  // Public field (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}!`);
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan Approved!`);
      return this;
    }
  }

  static helper() {
    console.log(`Not available in instances! Only in the class itself.`);
  }

  // Private methods
  // #approveLoan(value) {
  _approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Leandro', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
acc1.deposit(250);
// acc1.movements.push(-140);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000); // this shouldn't be possible
console.log(acc1);
console.log(acc1.pin);
console.log(acc1.getMovements());
Account.helper();

// Private field '#movements' must be declared in an enclosing class
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(1250);
console.log(acc1);
*/

//////////////////////////////////////////////
// CHALLENGE #1 - OOP

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

//////////////////////////////////////////////
// CHALLENGE #2 - CLASSES

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
    return this;
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

//////////////////////////////////////////////
// CHALLENGE #3 - CLASS INHERITANCE

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();

//////////////////////////////////////////////
// CHALLENGE #4 - CLASS INHERITANCE, PRIVATE PROPERTIES

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

class EVCl extends CarCl {
  // 2. Make the 'charge' property private
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `The ${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }
}

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
