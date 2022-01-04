'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

/////////////////////////////////////////////////
// SLICE (does NOT mutate)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Shalow copy of an array
console.log([...arr]); // Same as above

/////////////////////////////////////////////////
// SPLICE (mutates)
// Removes elements from an array and returns them
// Sintax: arr[start, deleteCount]
// console.log('splice', arr.splice(2)); // Mutates the array
arr.splice(-1); // last element deleted
console.log('splice', arr);
arr.splice(1, 2); // b and c deleted
console.log('splice', arr);

/////////////////////////////////////////////////
// REVERSE (mutates)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log('reverse', arr2);

/////////////////////////////////////////////////
// CONCAT (does NOT mutate)
const letters = arr.concat(arr2); // return a new array
console.log('concat', letters);
console.log([...arr, ...arr2]); // same as above

/////////////////////////////////////////////////
// JOIN (does NOT mutate)
console.log(letters.join(' - ')); // returns a string
*/

/////////////////////////////////////////////////
// THE NEW 'at' METHOD
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Leandro'.at(0));
console.log('Leandro'.at(-1));

/////////////////////////////////////////////////
// LOOPING ARRAYS WITH FOREACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`---- for-of ----`);
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Mv${i + 1}. You deposited €${mov}`);
  } else {
    console.log(`Mv${i + 1}. You withdrew €${Math.abs(mov)}`);
  }
}

console.log(`---- forEach ----`);
movements.forEach((mov, i) => {
  if (mov > 0) {
    console.log(`Mv${i + 1}. You deposited €${mov}`);
  } else {
    console.log(`Mv${i + 1}. You withdrew €${Math.abs(mov)}`);
  }
});
