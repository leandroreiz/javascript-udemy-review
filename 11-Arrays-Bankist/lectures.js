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
*/

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
