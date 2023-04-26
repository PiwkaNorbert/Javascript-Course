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

import addToCart, { cart } from './shoppingCart.js';
addToCart('sausages', 2);
addToCart('bread', 5);
addToCart('apple', 1);

console.log(cart);
