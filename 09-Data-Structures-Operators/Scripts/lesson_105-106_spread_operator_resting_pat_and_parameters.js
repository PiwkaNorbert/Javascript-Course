"use strict";
import restaurant from "./main.js";

console.log(`////////////////////////////////////////////////////////////////////

// RESTING PATTERN AND PARAMETES

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

// RESTING PATTERN AND PARAMETES

////////////////////////////////////////////////////////////////////

// 1) Destructuring
//  SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays2 } = restaurant.openingHours;

console.log(weekdays2);
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("Mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("Corn");

console.log(`////////////////////////////////////////////////////////////////////

// Spread Operator

////////////////////////////////////////////////////////////////////
`);
// Spread Operator
const arr2 = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr2];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
// Join two arrays or more

const menu2 = [...newMenu, ...restaurant.starterMenu];
console.log(menu2);

// Iterables : arrays, strings, maps, sets, Not Objects
const str = "Norbert";
const letters = [...str, "", "P."];
console.log(letters);
console.log(...str);
// console.log(`${...str}`); (needs , so arrays, functions)
// Real-world Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way
restaurant.orderPasta(...ingredients);
// Objects
const newRestaurant = { ...restaurant, founder: "Norbert", foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurant, restaurantCopy);
