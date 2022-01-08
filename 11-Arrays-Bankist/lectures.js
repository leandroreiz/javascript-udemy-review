/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: 'Leandro Reis',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Chelem Rodrigues',
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

/////////////////////////////////////////////////
// FOREACH WITH MAPS AND SETS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, map) => {
  // _ 'throw away variable convention'
  console.log(`${value}`);
});


/////////////////////////////////////////////////
// ARRAYS: MAP, FILTER AND REDUCE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// Using the MAP method
const movementsUsd = movements.map(el => el * eurToUsd);
console.log(movements, movementsUsd);

const movDescriptions = movements.map(
  (value, i) =>
    `Mv.${i + 1}: You ${value > 0 ? `deposited` : `withdrew`} ${Math.abs(
      value
    )}`
);
console.log(movDescriptions);

// FILTER method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(value => value > 0);
console.log(deposits);

const withdrawals = movements.filter(value => value < 0);
console.log(withdrawals);

// REDUCE method
const balance = movements.reduce((sum, value) => {
  return sum + value;
}, 0);
console.log(balance);

const max = movements.reduce((prev, curr) => (prev > curr ? prev : curr), 0);
console.log(max);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov)
  .toFixed(2);

console.log(totalDepositsInUSD);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account1 = {
  owner: 'Leandro Reis',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Chelem Rodrigues',
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

console.log(accounts);

// Using find
const account = accounts.find(acc => acc.owner === 'Chelem Rodrigues');
console.log(account);

// Using for-of
for (const account of accounts) {
  if (account.owner === 'Chelem Rodrigues') {
    console.log(account);
  }
}

/////////////////////////////////////////////////
// SOME, EVERY, FLAT, FLATMAP

console.log(movements);

// Equality
console.log(movements.includes(-130));

// Condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every
console.log(account1.movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2)); // 2 levels

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov);

// Using chaining
let overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance);

// flatMap
overallBalance = accounts
  .flatMap(acc => acc.movements) // only goes one level deeper
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance);

/////////////////////////////////////////////////
// SORTING ARRAYS

// Strings
const owners = ['Leandro', 'Chelem', 'Nina', 'Hugo', 'Vanessa'];
console.log(owners);
console.log(owners.sort());
console.log(owners); // Mutates the arrays

// Numbers
console.log(movements);
// console.log(movements.sort()); doesn't work with Numbers

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/////////////////////////////////////////////////
// CREATING AND FILLING ARRAYS

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

x.fill(1); // mutates the array
// x.fill(1, 3); // fills starting at index 3
// x.fill(1, 3, 5); // starts at 3 and ends on 5
console.log(x);

arr.fill(23, 1, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Create an array with 100 dice rolls
const diceRolls100 = Array.from({ length: 100 }, (cur, i) => {
  const roll = Math.trunc(Math.random() * 6 + 1);
  return roll;
});
console.log(diceRolls100);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/

/////////////////////////////////////////////////
// SUMMARY: WHICH ARRAY METHOD TO USE

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// 2.
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; // 6
// .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // 6

console.log(numDeposit1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (obj, cur) => {
      // cur > 0 ? (obj.deposits += cur) : (obj.withdrawals += cur);
      obj[cur > 0 ? `deposits` : `withdrawals`] += cur;
      return obj;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str.at(0).toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`tHiS iS A LONG TitLe, but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
