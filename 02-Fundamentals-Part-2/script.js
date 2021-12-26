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
// DATA STRUCTURES - ARRAYS

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

//////////////////////////////////
// DATA STRUCTURES - OBJECTS

const person = {
  firstName: "Leandro",
  lastName: "Reis",
  birthYear: 1983,
  job: "coder",
  friends: ["Johnny", "Marconi", "Fabio"],
};
console.log(person);
console.log(person.birthYear); // dot notation
console.log(person["friends"]); // bracket notation

// using the bracket notation to access the object values dynamically
const nameKey = "Name";
console.log(`${person["first" + nameKey]} ${person["last" + nameKey]}`);

// const interestedIn = prompt(
//   "what do you want to know about Leandro? Choose between firstName, lastName, birthYear, job and friends"
// );

// person[interestedIn]
//   ? console.log(person[interestedIn])
//   : console.log(`Not a valid value!`);

// adding new properties to the object
person.location = "Ireland";
person["twitter"] = "@leandroreiz";
console.log(person);

// Challenge
console.log(
  `${person.firstName} has ${person.friends.length} friend(s), and his best friend is called ${person.friends[0]}.`
);

//////////////////////////////////
// DATA STRUCTURES - OBJECTS METHODS
const currentYear = new Date().getFullYear();

const person = {
  firstName: "Leandro",
  lastName: "Reis",
  birthYear: 1983,
  job: "Front-end Developer",
  friends: ["Johnny", "Marconi", "Fabio"],
  hasDriversLicense: false,

  //calcAge: (birthYear) => 2021 - birthYear,

  // using the this keyword
  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Challenge
  // create a method that returns the string "Leandro is a 38-year old coder, and he does't have/has a driver's license."
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has" : "doesn't have"
    } a driver's license.`;
  },
};

// console.log(person.calcAge(1982)); //dot notation
// console.log(person["calcAge"](1984)); //brackets notation

console.log(person.age);

// run the method
person.calcAge();
console.log(person.age);

// challenge
console.log(person.getSummary());
//////////////////////////////////
// LOOPING ITERATIONS

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋🏼`);
}

const currentYear = new Date().getFullYear();
const person = [
  "Leandro",
  "Reis",
  currentYear - 1983,
  "Developer",
  ["Johnny", "Fabio", "Marconi"],
  true,
];

const types = [];

for (let i = 0; i < person.length; i++) {
  console.log(person[i], typeof person[i]);
  // types[i] = typeof person[i];
  types.push(typeof person[i]);
}
console.log(types);

const birthYears = [1991, 1983, 1986, 2001];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(currentYear - birthYears[i]);
}
console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== "string") continue;
  console.log(person[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] === "number") break;
  console.log(person[i]);
}

// Looping backwards
const currentYear = new Date().getFullYear();
const person = [
  "Leandro",
  "Reis",
  currentYear - 1983,
  "Developer",
  ["Johnny", "Fabio", "Marconi"],
];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}

// nested loops
for (let i = 1; i <= 3; i++) {
  console.log(`----- Starting exercise ${i} -----`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Exercise ${i}: Lifting weight repetition ${j}`);
  }
}

// Using the WHILE loop
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`The loop is about to end!`);
}
