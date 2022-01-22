//////////////////////////////////////////////
// Importing modules
import add, { cart } from './shoppingCart.js';
import cloneDeep from 'lodash-es';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';
import 'regenerator-runtime/runtime';

console.log(`Importing module...`);
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
/*
//////////////////////////////////////////////
// --
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('milk', 2);
// console.log(ShoppingCart.totalPrice);

// This is a bad practice
// import add, { totalPrice as price, tq } from './shoppingCart.js';
// --
//////////////////////////////////////////////

//////////////////////////////////////////////
// Top Level await (ES2022)
// Only works in modules

// console.log(`Before fetching.`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log(`After fetching. That proves the code was being blocked!`);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// using top level await
const lastPost = await getLastPost();
console.log(lastPost);

//////////////////////////////////////////////
// The module pattern
// It works due to closures

const ShoppingCartIFFE = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCartIFFE.addToCart('apple', 4);
ShoppingCartIFFE.addToCart('tomatos', 2);
console.log(ShoppingCartIFFE);
console.log(ShoppingCartIFFE.shippingCost); // undefined

//////////////////////////////////////////////
// CommonJS modules

// Works only on NodeJS
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js');
*/

//////////////////////////////////////////////
// Using Lodash (cloneDeep)

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateCloneDeep = cloneDeep(state);
console.log(stateCloneDeep);

state.user.loggedIn = false;

// hold the state of the page
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const leandro = new Person('Leandro');

console.log('Leandro' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TESTING PROMISES').then(x => console.log(x));
