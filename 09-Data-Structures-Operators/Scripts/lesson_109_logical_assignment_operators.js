"use strict";

console.log(`////////////////////////////////////////////////////////////////////

// 'OR' ASSIGNMENT OPERATOR (if value = falsy)

////////////////////////////////////////////////////////////////////`);
////////////////////////////////////////////////////////////////////

// 'OR' ASSIGNMENT OPERATOR (if value = falsy)

////////////////////////////////////////////////////////////////////
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// 'Nullish' ASSIGNMENT OPERATOR (Null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner || "<ANNONYMUS>";
rest2.owner = rest2.owner && "<ANNONYMUS>";
rest2.owner &&= "<LESZCZ>";

console.log(rest1);
console.log(rest2);

//
