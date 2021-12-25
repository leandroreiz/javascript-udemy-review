console.log("---------- CLASSES ----------");
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Working with variables
console.log("Jonas");
console.log(23);

// Variable names can use letters, numbers (not at the start of the variable name), 'underscore (_)' and the 'dolar sign ($)'. It's also a convention to use camelCase when coding in JavaScript.
let firstName = "Leandro";
let lastName = "Fernandes Reis";

// For constant variable it is recommended to use all CAPITAL letters.
let PI = 3.1415;

// Printing strings and variables
console.log(firstName + " " + lastName);
let myFirstJob = "Support Specialist";
let myCurrentJob = "Programmer";

console.log(
  "My name is " +
    firstName +
    ". My first job was as a " +
    myFirstJob +
    ", but today I am working as a " +
    myCurrentJob +
    "."
);

// Data types in JS are: Number, String, Boolean, Undefined, Null, Symbol (ES2015), BigInt (ES2020)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Leandro");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let undefinedVar;
console.log(undefinedVar); //value
console.log(typeof undefinedVar); //type

undefinedVar = 1983;
console.log(typeof undefinedVar);

console.log(typeof null); // it shows as an 'object' but that's actually a bug in JavaScript

// we use 'let' when we need to change the value later
let age = 37;
age = age + 1;
console.log(age);

const birthYear = 1983;
// birthYear = 1986; // can't be done as the variable is defined as 'const'
// const job; // all 'const' variables need to be initialized

var job = "programmer";
job = "teacher";

lastName = "Reis";
console.log(lastName); // undeclared variables also work, but are not recommended

const now = 2021;
const ageLeandro = now - 1983;
const ageChelem = now - 1986;

console.log(ageLeandro, ageChelem);

console.log(ageLeandro * 2, ageLeandro / 10, 2 ** 3);

const firstName = "Leandro";
const lastName = "Reis";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageLeandro > ageChelem);
console.log(ageLeandro < ageChelem);

console.log(ageChelem >= 18);

const isFullAge = ageChelem >= 18;
console.log(isFullAge);

const now = 2021;
const ageLeandro = now - 1983;
const ageChelem = now - 1986;

console.log(now - 1983 > now - 1986);

let x, y;
x = y = 25 - 10 - 5;
// x = y = 10, y = 10, x = y, x = 10
console.log(x, y);

let averageAge = ageLeandro + ageChelem / 2;
console.log(ageLeandro, ageChelem);
console.log(averageAge);
averageAge = (ageLeandro + ageChelem) / 2;
console.log(averageAge);

const firstName = "Leandro";
const job = "Font-End Developer";
const birthYear = 1983;
const currentYear = new Date().getFullYear();

// using concatenation of strings
const concatStrings =
"I'm " +
firstName +
", a " +
(currentYear - birthYear) +
" years old " +
job +
"!";
console.log(concatStrings);

// using template literals
const templateLiteral = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(templateLiteral);

console.log(`Just a regular string...`);

// multiline strings
console.log("String with \nmultiple \nlines using quotes");
console.log(`String with
multiple
lines using backticks`);

// If / else statements

const age = 15;

if (age >= 18) {
  console.log("This person can start the process for a driver's license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You still have ${yearsLeft} years until you can get a driver\'s license 🚫`
    );
}

const birthYear = 1983;
  
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`${century}th century`);

// Type conversion is when we explicitly convert from one type to another and type coercion is when JavaScript converts a value automatically

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Leandro")); //NaN = Not a (valid) Number
console.log(typeof NaN);

console.log(String(23), typeof String(23));

// type coercion
console.log("I am " + 23 + " years old."); // JS converted the 23 from number to string

console.log("23" - "10" - 3); // strings converted to numbers using the minus sign
console.log("23" + "10" + 3); // the plus sign converted the number (3) to a string
console.log("23" * "2");
console.log("23" / "2"); // converted strings to numbers

let n = "1" + 1; //11 (string)
n = n - 1; // 11 - 1 = 10 (number)
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15

// Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// Everything else will be considered truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Leandro"));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You should get a job!`);
}

// Equality operators (== vs. ===)
// ===, does not do type coercion
// ==, does type coercion

const age = "18";
if (age === 18) console.log(`You just became an adult (strict)`);
if (age == 18) console.log(`You just became an adult (loose)`);

// let favouriteNumber = prompt(`What's your favourite number?`);
let favouriteNumber = Number(prompt(`What's your favourite number?`));

if (favouriteNumber === 23) {
  // 23 = 23
  console.log("Cool! 23 is a great number.");
} else if (typeof favouriteNumber === "number") {
  console.log(`${favouriteNumber} is also a great number`);
} else {
  console.log(`This is not a number! This is a ${typeof favouriteNumber}.`);
  23;
}

if (favouriteNumber !== 23) console.log(`Why not 23?`);

// Boolean logic: The and, or & not operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;


// if (shouldDrive) {
//   console.log(`This person is good to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }
    
const isTired = true;

if (shouldDrive && !isTired) {
  console.log(`This person is able to drive`);
} else {
  console.log(`I should drive!`);
}

// Switch statement
const day = "sunday";

console.log(`***** Using the switch statement *****`);
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😎");
    break;

  default:
    console.log("Error: This is not a valid day of the week!");
    break;
}

console.log(`***** Using if/else statements *****`);
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😎");
} else {
  console.log("Error: This is not a valid day of the week!");
}
*/
// Ternary operator

const age = 23;

age >= 18
  ? console.log(`I'd like to drink wine!`)
  : console.log(`I'd like to drink water`);
// condition ? if the condition returns true : else

const drink = age >= 18 ? "wine" : "water";
console.log(`I'd like to drink ${drink}!`);

// the ternary operator is an expression (not a statement as the if/else), so it can be used inside a template literal
console.log(`I'd like to drink ${age >= 18 ? "wine" : "water"}!`);
