'use strict';
//////////////////////////////////////////
// DEFAULT PARAMETERS
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // undefined for default

//////////////////////////////////////////
// PASSING ARGUMENTS: VALUE VS. REFERENCE

const flight = 'LH234';
const person = {
  name: 'Leandro Reis',
  passport: 34598,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 34598) {
    alert(`Checked in!`);
  } else {
    alert(`Wrong passport number!`);
  }
};

// checkIn(flight, person);
// console.log(flight); // LH234, as 'flight' is a primitive type a copy of it will be passed as an argument
// console.log(person); // Mr. Leandro Reis, as 'person' is a reference type variable (object)

// ...is the same as doing the below:
// const flightNum = flight;
// const passenger = person;

const newPassport = function (passportOwner) {
  passportOwner.passport = Math.trunc(Math.random() * 100000);
};

// 2 different functions manipulating the same object (person), this is creating an issue
newPassport(person);
checkIn(flight, person);

//////////////////////////////////////////
// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
// Functions Accepting Call Back Functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`-----\nOriginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Callback function
const coolFn = () => console.log('😎');
document.body.addEventListener('click', coolFn);
['Jonas', 'Marta', 'Adam'].forEach(coolFn);
//////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}!`);
//   };
// };

// Using arrow functions
const greet = greeting => name => console.log(`${greeting} ${name}!`);

const greeterHey = greet('Hey');
greeterHey('Chelem');

greet('Holla')('Hermano'); // use and call the function at the same
*/
//////////////////////////////////////////
// THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passenger) {
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passenger });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

lufthansa.book(239, 'Leandro Reis');
lufthansa.book(635, 'Chelem Rodrigues');

const book = lufthansa.book;
// book(1413, 'Philipe Cabrera'); // This doesn't work because of the 'this' keyword

// CALL method
book.call(eurowings, 23, 'Philipe Cabrera');
book.call(lufthansa, 239, 'Fabio Miranda');
book.call(swiss, 583, 'Johnny Neder');

// APPLY method
const flightData = [583, 'Andre Reis'];
book.apply(swiss, flightData);
// book.call(swiss, ...flightData); // Same and preferred

//////////////////////////////////////////
// THE BIND METHOD

const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookEW(77, 'Maria Luiza');

// Creating a binded function for a specific airline and flight
// Partial application
const bookEW23 = book.bind(eurowings, 77);
bookEW23('Leonardo Fernandes');

// Printing the objects
console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane);
// When using the 'EventListener' the 'this' keyword always point to the element on which the function is attached to it, in this case the button. Using the 'bind' and selecting to where the 'this' keyword will point solve the problem.

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (presetting parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Use null if no this keyword needed
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge
const purchaseTotal = value => rate => value + value * rate;
console.log(purchaseTotal(1000)(0.23));
