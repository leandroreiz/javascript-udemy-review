"use strict";
console.log("----- CLASSES -----");
//////////////////////////////////
// USING STRICT MODE

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I believe I can drive!`);

// const interface = "Audio";
// const private = 123;

//////////////////////////////////
// FUNCTIONS

// parameter - the placeholder in the function constructor
// argument - the value passed to the function when running it

// declaring
// function functionName(parameters) {
//   //code block
// }

// calling / running / invoking function
// functionName(arguments);

function logger() {
  console.log(`My name is Leandro.`);
}

logger();

// receiving and returning data in functions
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

let result = fruitProcessor(5, 0);
console.log(result);

result = fruitProcessor(2, 4);
console.log(result);

//////////////////////////////////
// FUNCTION DECLARATION VS. EXPRESSIONS

const year = new Date().getFullYear();
let age = calcAge(1983);

// function declaration (can be called before being declared in the code due to hoisting)
function calcAge(birthYear) {
  return year - birthYear;
}

console.log(`I am ${age} years old.`);

// function expression
const calcAgeExp = function (birthYear) {
  return year - birthYear;
};
age = calcAgeExp(1986);
console.log(`Chelem is ${age} years old.`);

//////////////////////////////////
// ARROW FUNCTION

const calcAgeArr = (birthYear) => year - birthYear;
age = calcAgeArr(1985);
console.log(`Andre is ${age} years old.`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = year - birthYear;
  const retirement = 65 - age;
  return `${firstName} stills need to work ${retirement} years before retirement.`;
};

console.log(yearsUntilRetirement(1983, "Leandro"));

//////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS

function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

const result = fruitProcessor(2, 3);
console.log(result);


//////////////////////////////////
// DATA STRUCTURES
// ARRAYS

const friends = ["Wallace", "Hugo", "Fabio"];
console.log(friends);

const years = new Array(1983, 1986, 2001);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // size of the array
console.log(friends[friends.length - 1]); // last array's element

friends[2] = "Johnny";
console.log(friends);

const leandro = ["Leandro", "Reis", 2021 - 1983, "coder", friends];
console.log(leandro);

// Exercise
const currentYear = new Date().getFullYear();
const calcAge = (birthYear) => currentYear - birthYear;

const birthYears = [1992, 1967, 1983, 1986, 2010];
console.log(calcAge(birthYears)); // NaN

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);

// Basic Arrays Operations / Methods

// Add elements (push and unshift)
const friends = ["Wallace", "Hugo", "Fabio"];
const newLength = friends.push("Johnny"); //last position
console.log(friends);
console.log(newLength);

friends.unshift("Marconi"); //first position
console.log(friends);

// Remove elements (pop and shift)
const popped = friends.pop(); //last
console.log(friends, popped);

const shifted = friends.shift(); //first
console.log(shifted, friends);

console.log(friends.indexOf("Hugo"));
console.log(friends.indexOf("Humberto")); //not in the array, returns -1

console.log(friends.includes("Hugo")); //true
console.log(friends.includes("Humberto")); //false

friends.push(38);
console.log(friends.includes("38")); //false
console.log(friends.includes(38)); //true
// the 'includes' method does not use type coercion

if (friends.includes("Hugo")) {
  console.log(`You have a friend called Hugo.`);
}
*/
