/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
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
*/
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
