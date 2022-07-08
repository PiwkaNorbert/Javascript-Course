'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// const openState = ['open', 'close'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     [openState[0]]: 11,
//     [openState[1]]: 23,
//   },
//   [weekdays[5]]: {
//     [openState[0]]: 0, // Open 24 hours
//     [openState[1]]: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //OLDSCHOOL WAY
//   // openingHours: openingHours,
//   //ES6 Enchanced object literals
//   openingHours,
//   //OLDSCHOOL WAY
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //ES6 Enchanced object literals
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
//       will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta made with ${ing1}, ${ing2}, ${ing3},`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };
console.log(
  `////////////////////////////////////////////////////////////////////

//  Working with strings P4 (Exercise, working with imported data)

////////////////////////////////////////////////////////////////////
`
);
////////////////////////////////////////////////////////////////////

//  Working with strings P4

////////////////////////////////////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// caps 3 letters and trim after;
const getCode = str => str.slice(0, 3).toUpperCase();
// TODO
// split by +
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // If flight is delayed add a red circle
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45); // Make it so its nicely aligned

  console.log(output);
}
console.log(
  `////////////////////////////////////////////////////////////////////

//  Working with strings P3

////////////////////////////////////////////////////////////////////
`
);

////////////////////////////////////////////////////////////////////

//  Working with strings P3

////////////////////////////////////////////////////////////////////

// SPLIT AND JOIN

console.log(...'a+very+nice+string'.split('+'));
console.log('Norbert Piwka'.split(' '));
const [firstName, lastName] = 'Norbert Piwka'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('norbert piwka');
capitalizeName('lee goymer');

// PADDING
const message = ' Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(' Norbert '.padStart(23, '+').padEnd(40, '+'));

// MASKING

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2387438987236721));
console.log(maskCreditCard('1267389412678342'));

// REPEAT
const message2 = 'Bad weather... All departues delayed...\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
console.log(
  `////////////////////////////////////////////////////////////////////

//  Working with strings P2

////////////////////////////////////////////////////////////////////
`
);
////////////////////////////////////////////////////////////////////

//  Working with strings P2

////////////////////////////////////////////////////////////////////
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passanger = 'jOnAs'; // -> should be Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);
// Comparing email
const email = 'hello@norbert.io';
const loginEmail = '  Hello@Norbert.io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passaengers come to boarding door 23.  Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans (includes, starts with and ends with)

const plane2 = 'Airbus A320';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.endsWith('Air'));
if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
  console.log('it belongs to the family');
else console.log('it doesnt');

// Pricetice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife' || 'gun'))
    console.log('youre not allowed on board');
  else console.log('Welcome aboard');
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('socks and a camera');
checkBaggage('Got some snacks and a gun for protection');
console.log(
  `////////////////////////////////////////////////////////////////////

//  Working with strings P1

////////////////////////////////////////////////////////////////////
`
);

////////////////////////////////////////////////////////////////////

//  Working with strings P1

////////////////////////////////////////////////////////////////////

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log('B737'.length);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // Case sensetive

console.log(airline.slice(4)); // SLICE MAKES IT SO THE STRINGS STARTS AT A NEW POSITION
const airPort = airline.slice(4, 7); // Stop extracting before the 7th index (end - begining)
console.log(airPort);
console.log(airline);

//not hardcoding
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // Negative goes backwards
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'E' || s === 'B') console.log('this is a middle seat');
  else console.log('Not a middle seat');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
/*
////////////////////////////////////////////////////////////////////

//  Maps: Iteration

////////////////////////////////////////////////////////////////////

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!🎉'],
  [false, 'Try again!'],
]);


console.log(question);

// Convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// }

console.log(question.get(question.get('correct') === answer));

// Convert map to array

console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


////////////////////////////////////////////////////////////////////

//  Maps: Fundamentals

////////////////////////////////////////////////////////////////////

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, ' Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :d')
  .set(false, 'We are closed :c');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

// rest.set([1, 2], 'test'); // ARRAYS OR OBJECTS AS MAP KEYS
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// console.log(rest.get([1, 2])); //this object is not the same as the other one in the heap
// If I want it to work then I have to declare the array I.e
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));


////////////////////////////////////////////////////////////////////

//  Sets

////////////////////////////////////////////////////////////////////

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Norbert'));
console.log(ordersSet.size); // We use ".size" method to determin the length of the set, don't use length
console.log(ordersSet.has('Pizza')); // ".has" method to determin whether this item exist, it's like includes in arrays
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); //derp you know what it does
// ordersSet.clear(); // '.clear' method deletes the whole set

console.log(ordersSet);

for (const order of ordersSet) console.log(order); // you cna loop through them too

// BIG USE CASE FOR 'SETS'

// the main purpose to SET is to remove duplicate values from arrays

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manage', 'Chef', 'Waiter'];

const staffUnique = new Set(staff); // Making values unique
const staffUnique2 = [...new Set(staff)]; // <- constructing an array

console.log(staffUnique);
console.log(staffUnique2);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manage', 'Chef', 'Waiter']).size
);

console.log(new Set('NorbertPiwka').size);


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

////////////////////////////////////////////////////////////////////

// OPTIONAL CHAINGING (?. TO CHECK IF VALUE EXISTS)

////////////////////////////////////////////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // error
// WITH optional chaining  (THE result will output an Undefined  since we are checking if the value exists)
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

console.log(restaurant.openingHours?.fri?.open);
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(
  `Method exists:
` + restaurant.order?.(0, 1) ?? 'Method does not exist'
);
console.log(restaurant.orderResotto?.(0, 1) ?? 'Method does not exist');

// Arrays (to check if its empty)
const users = [{ name: 'Norbert', email: 'norbert@gmail.com' }];
const users2 = [];

console.log(
  `----Full array----
` + users[0]?.name ?? 'User array empty'
);
console.log(
  `----Empty array----
` + users2[0]?.name ?? 'User array empty'
);
if (users2.length > 0) console.log(users2[0].name);
else console.log('User array empty');

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

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

////////////////////////////////////////////////////////////////////

// 'OR' ASSIGNMENT OPERATOR (if value = falsy)

////////////////////////////////////////////////////////////////////
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// 'Nullish' ASSIGNMENT OPERATOR (Null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner || '<ANNONYMUS>';
rest2.owner = rest2.owner && '<ANNONYMUS>';
rest2.owner &&= '<LESZCZ>';

console.log(rest1);
console.log(rest2);

//

////////////////////////////////////////////////////////////////////

// The Nullish Coalescing Operator (??)

////////////////////////////////////////////////////////////////////
restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest);
// Nullish: null and undefined (NOT 0 or '') <- empty string returns a falsy value
const guestCorrect = restaurant.numGuests ?? 9;
console.log(guestCorrect);
//

////////////////////////////////////////////////////////////////////

// SHORT CIRCUITINBG (&& AND ||)

////////////////////////////////////////////////////////////////////

// Use ANY data type, they can return ANY data type, Short-Circuitting
console.log(3 || 'Norbert');
console.log('' || 'Norbert');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 11;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------AND-------');
console.log(0 && 'Norbert'); // When it is false, it short circuits
console.log(7 && 'Norbert');
console.log('hello' && 23 && null && 23 && 'Norbert');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Corn', 'Chicken');
// Memes
const pizza1 = restaurant.orderPizza
  ? restaurant.orderPizza('Corn', 'Chicken')
  : `Doesnt exist`;
console.log(pizza1);
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

restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Corn');

// Spread Operator
const arr2 = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
// Join two arrays or more

const menu2 = [...newMenu, ...restaurant.starterMenu];
console.log(menu2);

// Iterables : arrays, strings, maps, sets, Not Objects
const str = 'Norbert';
const letters = [...str, '', 'P.'];
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
const newRestaurant = { ...restaurant, founder: 'Norbert', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant, restaurantCopy);

////////////////////////////////////////////////////////////////////

// Object Destructuring

////////////////////////////////////////////////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours2, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default Values

const { menu3 = [], starterMenu: starters = [] } = restaurant;
console.log(menu3, starters);

// Mutating Variables

let a2 = 111;
let b2 = 999;
let obj = { a4: 23, b4: 7, c4: 14 };

({ a2, b2 } = obj);
console.log(a2, b2);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////////////////////////////////////////////////////////

const arr3 = [2, 3, 4];
const a3 = arr[0];
const b3 = arr[1];
const c3 = arr[2];

const [x1, y1, z1] = arr;

console.log(x1, y1, z1);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables (Lees way)

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// With destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recei 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
