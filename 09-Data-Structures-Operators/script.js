'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
/////////////////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Moving data around the ol' way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [first, , third] = nested;
// console.log(first, third);
const [first, , [nestedFirst, nestedSecond]] = nested;
console.log(first, nestedFirst, nestedSecond);

// Setting default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8, 9, undefined

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8, 9, undefined

/////////////////////////////////////
// DESTRUCTURING OBJECTS
const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);

// New variable names while destructuring
const {
  restaurantName: resName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// { a, b } = obj; // Unexpected token '='
({ a, b } = obj); // the parenthesis here are necessary
console.log(a, b);

// Nested Objects
const {
  fri: { open: openingHour, close: closingHour },
} = openingHours;
console.log(openingHour, closingHour);

// Using destructuring to pass objects as arguments
restaurant.orderDelivery({
  time: '22:30',
  address: '9a Watermill Park',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '9a Watermill Park',
  starterIndex: 1,
});

/////////////////////////////////////
// THE SPREAD OPERATOR (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: Arrays, strings, maps, sets. NOT Objects.
const str = 'Leandro';
const letters = [...str, ' ', 'R', 'e', 'i', 's'];
console.log(letters);
console.log(...letters);

// Real-world example
// const ingredientes = [
//   prompt("Let's make pasta!\nIngredient 1: "),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3: '),
// ];
// console.log(ingredientes);
// // Old way
// restaurant.orderPasta(ingredientes[0], ingredientes[1], ingredientes[2]);
// // Using the spread operator
// restaurant.orderPasta(...ingredientes);

// Objects
const newRestaurant = { foundedIn: 1678, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.restaurantName = 'Ristorante Di Fontana';
console.log(restaurantCopy.restaurantName);
console.log(restaurant.restaurantName);

/////////////////////////////////////
// REST PATTERNS AND PARAMETERS

// 1) DESTRUCTURING
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // does not include skipped elements
console.log(pizza, risotto, otherFood);

// Objects
const { sat: saturday, ...weekdays } = restaurant.openingHours;
console.log(saturday, weekdays);

// 2) FUNCTIONS
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cheese', 'olives', 'prosciutto', 'oregano');

restaurant.orderPizza('cheese');
*/

/////////////////////////////////////
// SHORT CIRCUITING (&& AND ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Leandro'); // 3
console.log('' || 'Leandro'); // Leandro
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello, as it is the first truthy value

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Leandro'); // 0
console.log(7 && 'Leandro'); // Leandro
console.log('Hello' && 23 && null && 'Leandro'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'prociutto');
}

restaurant.orderPizza && restaurant.orderPizza('tomato', 'cheese', 'olives');
