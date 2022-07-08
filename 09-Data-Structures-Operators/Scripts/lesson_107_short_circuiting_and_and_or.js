"use strict";
import restaurant from "./main.js";

console.log(`////////////////////////////////////////////////////////////////////

// SHORT CIRCUITINBG (&& AND ||)

////////////////////////////////////////////////////////////////////`);
////////////////////////////////////////////////////////////////////

// SHORT CIRCUITINBG (&& AND ||)

////////////////////////////////////////////////////////////////////

// Use ANY data type, they can return ANY data type, Short-Circuitting
console.log(3 || "Norbert");
console.log("" || "Norbert");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 11;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("-------AND-------");
console.log(0 && "Norbert"); // When it is false, it short circuits
console.log(7 && "Norbert");
console.log("hello" && 23 && null && 23 && "Norbert");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("Corn", "Chicken");
// Memes
const pizza1 = restaurant.orderPizza
  ? restaurant.orderPizza("Corn", "Chicken")
  : `Doesnt exist`;
console.log(pizza1);
