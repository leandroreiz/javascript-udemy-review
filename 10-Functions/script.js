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
*/
//////////////////////////////////////////
//
git commit -m "Default Parameters & Passing Arguments: Value Vs. Reference"