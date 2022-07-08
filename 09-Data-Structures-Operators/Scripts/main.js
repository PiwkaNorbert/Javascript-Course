"use strict";

const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
const openState = ["open", "close"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    [openState[0]]: 11,
    [openState[1]]: 23,
  },
  [weekdays[5]]: {
    [openState[0]]: 0, // Open 24 hours
    [openState[1]]: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //OLDSCHOOL WAY
  // openingHours: openingHours,
  //ES6 Enchanced object literals
  openingHours,
  //OLDSCHOOL WAY
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 Enchanced object literals
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta made with ${ing1}, ${ing2}, ${ing3},`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

("use strict");
console.log(`////////////////////////////////////////////////////////////////////

//  Maps: Iteration

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

//  Maps: Iteration

////////////////////////////////////////////////////////////////////

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!🎉"],
  [false, "Try again!"],
]);

console.log(question);

// Convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// }

console.log(question.get(question.get("correct") === answer));

// Convert map to array

console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

("use strict");
console.log(`////////////////////////////////////////////////////////////////////

//  Maps: Fundamentals

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

//  Maps: Fundamentals

////////////////////////////////////////////////////////////////////

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, " Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :d")
  .set(false, "We are closed :c");

console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

// rest.set([1, 2], 'test'); // ARRAYS OR OBJECTS AS MAP KEYS
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
// console.log(rest.get([1, 2])); //this object is not the same as the other one in the heap
// If I want it to work then I have to declare the array I.e
const arr3 = [1, 2];
rest.set(arr3, "test");
console.log(rest.get(arr3));

("use strict");
console.log(`////////////////////////////////////////////////////////////////////

//  Sets

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

//  Sets

////////////////////////////////////////////////////////////////////

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
console.log(new Set("Norbert"));
console.log(ordersSet.size); // We use ".size" method to determin the length of the set, don't use length
console.log(ordersSet.has("Pizza")); // ".has" method to determin whether this item exist, it's like includes in arrays
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto"); //derp you know what it does
// ordersSet.clear(); // '.clear' method deletes the whole set

console.log(ordersSet);

for (const order of ordersSet) console.log(order); // you cna loop through them too

// BIG USE CASE FOR 'SETS'

// the main purpose to SET is to remove duplicate values from arrays

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manage", "Chef", "Waiter"];

const staffUnique = new Set(staff); // Making values unique
const staffUnique2 = [...new Set(staff)]; // <- constructing an array

console.log(staffUnique);
console.log(staffUnique2);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manage", "Chef", "Waiter"]).size
);

console.log(new Set("NorbertPiwka").size);

("use strict");
console.log(`////////////////////////////////////////////////////////////////////

//  Looping Objects: Object Keys, Values, and Entries

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

//  Looping Objects: Object Keys, Values, and Entries

////////////////////////////////////////////////////////////////////

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

// Property Keys
console.log(`-----keys`);
for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
}
console.log(openStr);
console.log(`-----`);

// Property VALUES
console.log(`-----values`);
const values = Object.values(openingHours);
console.log(values);
console.log(`-----`);
console.log(`-----object`);
// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
("use strict");
console.log(`////////////////////////////////////////////////////////////////////

// OPTIONAL CHAINGING (?. TO CHECK IF VALUE EXISTS)

////////////////////////////////////////////////////////////////////
`);
////////////////////////////////////////////////////////////////////

// OPTIONAL CHAINGING (?. TO CHECK IF VALUE EXISTS)

////////////////////////////////////////////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // error
// WITH optional chaining  (THE result will output an Undefined  since we are checking if the value exists)
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

console.log(restaurant.openingHours?.fri?.open);
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(
  `Method exists:
` + restaurant.order?.(0, 1) ?? "Method does not exist"
);
console.log(restaurant.orderResotto?.(0, 1) ?? "Method does not exist");

// Arrays (to check if its empty)
const users = [{ name: "Norbert", email: "norbert@gmail.com" }];
const users2 = [];

console.log(
  `----Full array----
` + users[0]?.name ?? "User array empty"
);
console.log(
  `----Empty array----
` + users2[0]?.name ?? "User array empty"
);
if (users2.length > 0) console.log(users2[0].name);
else console.log("User array empty");
("use strict");
console.log(`////////////////////////////////////////////////////////////////////

// ENCHANCED OBJECT LITERALS

////////////////////////////////////////////////////////////////////`);
////////////////////////////////////////////////////////////////////

// ENCHANCED OBJECT LITERALS

////////////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const menuLoop of menu) console.log(menuLoop);
console.log(`-----OLDSCHOOL WAY-----`);
// OLDSCHOOL WAY
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log(`-----DESTRUCTURING-----`);
// DESTRUCTURING
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

export { restaurant as default, openingHours, openState, weekdays };
