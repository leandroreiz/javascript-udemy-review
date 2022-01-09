'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Leandro Reis',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2020-11-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-11-29T09:15:04.904Z',
    '2021-12-25T10:17:24.185Z',
    '2022-01-01T14:11:59.604Z',
    '2022-01-06T17:01:17.194Z',
    '2022-01-07T23:36:17.929Z',
    '2022-01-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Chelem Rodrigues',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

// Format dates
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    return `Today`;
  } else if (daysPassed === 1) {
    return `Yesterday`;
  } else if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// Format currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// Display movements on screen
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // Generating HTML
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate balance and display it on screen
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// Calculate and display the summary of ins, outs and interest
const calcDisplaySummary = function (acc) {
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(sumIn, acc.locale, acc.currency);

  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(sumOut),
    acc.locale,
    acc.currency
  );

  const sumInterest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(
    sumInterest,
    acc.locale,
    acc.currency
  );
};

// Create usernames for each user
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUsernames(accounts);

// Countdown timer
const startCountdown = function () {
  // Set time in seconds
  let time = 120;

  const tick = () => {
    // Set minutes and seconds
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the current time
    labelTimer.textContent = `${min}:${sec}`;
    // When 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease by 1 every second
    time--;
  };

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  // Return the timer to be used outside
  return timer;
};

const resetTimer = function () {
  clearInterval(timer);
  timer = startCountdown();
};

// Update User Interface
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

////////////////////////////////////////////////
// START OF TESTING
// Fake Login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// END OF TESTING
////////////////////////////////////////////////

/////////////////////////////////////////////////
// Global variables
let currentAccount, timer;

/////////////////////////////////////////////////
// Event handlers
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}.`;
    containerApp.style.opacity = 100;

    // Create current date and time using Intl
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric', // numeric, long, 2-digit
      // weekday: 'long',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = now.getHours();
    // const minutes = now.getMinutes();
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;

    // Remove cursor from input
    inputLoginPin.blur();

    // Check if the timer is running and clear it if yes
    if (timer) clearInterval(timer);

    // Start countdown timer
    timer = startCountdown();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  window.focus();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiverAcc?.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    resetTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // Reset timer
  resetTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear the user and pin fields
  inputTransferAmount.value = inputTransferTo.value = '';
  window.focus();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

/////////////////////////////////////////////////
// CONVERTING AND CHECKING NUMBERS
// Working with decimals and its problems in JavaScript
console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false, that's an error in JavaScript

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseFloat('  2.5rem  ')); // 2.5
// console.log(parseFloat('2.5')); // will work, but it is recommended to use Number

// Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// The best way to checking if a value is a number:
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

/////////////////////////////////////////////////
// MATH AND ROUNDING

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23, uses type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN, doesn't use parse

console.log(Math.min(5, 18, 23, 11, 2)); // 2

// Calculating the area of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3)); // removes decimal part

// Round to the nearest integer
console.log(Math.round(23.2)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.2)); // 24
console.log(Math.ceil('23.9')); // 24, does type coercion

console.log(Math.floor(23.2)); // 23
console.log(Math.floor(23.9)); // 23

// Negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24, works the other way around for negative numbers

// Rouding decimals
console.log((2.7).toFixed(0)); // '3', the method '.toFixed()' returns a string
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35, string converted to number

/////////////////////////////////////////////////
// THE REMAINDER OPERATOR (%)

console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666666666666665

// Checking if a number is odd or even
console.log(6 % 2); // 0, then it is even

// Function to calculate if a given number is even
const isEven = n => n % 2 === 0;
console.log(isEven(10));
console.log(isEven(5));
console.log(isEven(1986));
console.log(isEven(1983));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `lightgrey`;
  });
});

/////////////////////////////////////////////////
// NUMERIC SEPARATORS (Introduced in 2020)

// 287,460,000,000
const solarSystemDiameter = 287_460_000_000;
console.log(solarSystemDiameter);

const price = 345_99;
console.log(price);

let transferFee = 15_00;
console.log(transferFee);
transferFee = 1_500;
console.log(transferFee);

// const PI = 3._1415; // Invalid or unexpected token

console.log(Number('230000')); // 230000
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

/////////////////////////////////////////////////
// WORKING WITH BigInt (added in ES2020)

// This is the biggest number JavaScript can work with
console.log(2 ** 53 - 1); // 9007199254740991 or 9,007,199,254,740,991
console.log(Number.MAX_SAFE_INTEGER);

console.log(23409872349872349867234897234987); // 2.340987234987235e+31
console.log(23409872349872349867234897234987n); //23409872349872349867234897234987n
console.log(BigInt(23409872)); //23409872n

// Operations
console.log(10000n + 10000n);
console.log(123798612387665132487n * 123134123123n);
// console.log(Math.sqrt(16n)); // Cannot convert a BigInt value to a number at Math.sqrt

const huge = 1230897234509867312476n;
const number = 23;
// console.log(huge * number); // Cannot mix BigInt and other types
console.log(huge * BigInt(number)); // 28310636393726948186948n

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false, as there is NO type coercion
console.log(20n == 20); // true, because '==' DOES type coercion
console.log(typeof 20n); // bigint

console.log(huge + ` is really BIG!`);

// Divisions
console.log(10n / 3n); // 3n, return the closest integer
console.log(10 / 3); // 3.3333333333333335

/////////////////////////////////////////////////
// CREATING DATES

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Jan 09 2022 13:49:48'));
console.log(new Date('December 24, 2022'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // the month is 0 based

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later
// 3 * 24 * 60 * 60 * 1000 = 259200000 (timestamp)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // 10, corresponds to November
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4, 4th day of the week (Thursday)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime()); // 2142256980000

console.log(new Date(2142256980000)); // Create a new date using milliseconds

console.log(Date.now()); // returns a timestamp

future.setFullYear(2040);
console.log(future);

/////////////////////////////////////////////////
// OPERATION WITH DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

/////////////////////////////////////////////////
// INTERNATIONALIZING NUMBERS (Intl)

const num = 3884764.23;

const options = {
  style: 'currency', // unit, percent, currency
  unit: 'celsius', //'mile-per-hour'
  currency: 'EUR',
  // useGrouping: false,
};

console.log(`US:       :`, new Intl.NumberFormat('en-US', options).format(num));
console.log(`Germany   :`, new Intl.NumberFormat('de-DE', options).format(num));
console.log(`Portugal  :`, new Intl.NumberFormat('pt-PT', options).format(num));
console.log(`Brasil    :`, new Intl.NumberFormat('pt-BR', options).format(num));
console.log(`Syria     :`, new Intl.NumberFormat('ar-SY', options).format(num));

// Using the navigator's language
console.log(
  `${navigator.language}`.padEnd(10, ' ') + `:`,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

/////////////////////////////////////////////////
// TIMERS: setTimeout and setInterval

// setTimeout
const ingredients = ['panchetta', 'mozzarella'];

const pizzaTimer = setTimeout(
  (sauce, cheese) =>
    console.log(`Here's your pizza with ${sauce} and ${cheese}! 🍕`),
  3000,
  ...ingredients
);
console.log(`Waiting...`);

if (ingredients.includes('tomato sauce')) clearTimeout(pizzaTimer);

// setInterval
setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
*/
