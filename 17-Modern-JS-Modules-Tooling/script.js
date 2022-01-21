//////////////////////////////////////////////
// Importing modules

console.log(`Importing module`);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

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
