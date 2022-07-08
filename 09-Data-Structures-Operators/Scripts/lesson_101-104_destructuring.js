"use strict";
import restaurant from "./main.js";
import openingHours from "./main.js";
console.log(`////////////////////////////////////////////////////////////////////

// Object Destructuring

////////////////////////////////////////////////////////////////////`);
////////////////////////////////////////////////////////////////////

// Object Destructuring

////////////////////////////////////////////////////////////////////

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

const { name, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
console.log(`///////////////////////////
      Default Values
///////////////////////////`);
// Default Values

const { menu3 = [], starterMenu: starters = [] } = restaurant;
console.log(menu3, starters);
console.log(`///////////////////////////
      Mutating Variables
///////////////////////////`);

// Mutating Variables

let a2 = 111;
let b2 = 999;
let obj = { a4: 23, b4: 7, c4: 14 };

({ a2, b2 } = obj);
console.log(a2, b2);

// Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
console.log(
  `//////////////////////////////////////////////////////////////////////////`
);
////////////////////////////////////////////////////////////////////

const arr3 = [2, 3, 4];
const a3 = arr3[0];
const b3 = arr3[1];
const c3 = arr3[2];

const [x1, y1, z1] = arr3;
console.log(a3, b3, c3);
console.log(x1, y1, z1);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
console.log(
  `/////////////////////////////////////////
      Switching Variables (Lees way)
/////////////////////////////////////////`
);

// Switching Variables (Lees way)

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

console.log(`/////////////////////////////////////////
      With destructuring
/////////////////////////////////////////`);

// With destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(`/////////////////////////////////////////
      Receive 2 return values from a function 
/////////////////////////////////////////`);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

console.log(`
/////////////////////////////////////////
      Nested Destructuring
/////////////////////////////////////////`);
// Nested Destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
console.log(`
/////////////////////////////////////////
      Default values
/////////////////////////////////////////`);

// Default values

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
