'use strict';
console.log('importing module');

// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// addToCart('pie', 2);
// addToCart('bread', 5);
// console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('mushrooms', 5);
/*
import addToCart, { cart } from './shoppingCart.js';
addToCart('sausages', 2);
addToCart('bread', 5);
addToCart('apple', 1);

console.log(cart);

// console.log('start');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Pormise pending
const lastPost = getLastPost();
console.log(lastPost);

// Not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();

console.log(lastPost2);


// Common js

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCart = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from stock supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2);
*/

// // NODE.JS
// Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };
// // Import
// const { addToCar} = require('./shoppingCart.js')

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept;
// }
