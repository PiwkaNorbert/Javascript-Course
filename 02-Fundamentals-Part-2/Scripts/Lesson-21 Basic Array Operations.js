"use strict";
///////////////////////////////////////////////////////////////

// Basic Array Operations

///////////////////////////////////////////////////////////////
const friends = ["Michael", "Hubert", "Nikola"];

// ADD ELEMENTS
const newLength = friends.push("Justyna");
console.log(friends);
console.log(newLength);
friends.unshift("John");
console.log(friends);

// REMOVE ELEMENTS

friends.pop();
const popped = friends.pop();

console.log(friends);
console.log(popped);
friends.shift();
console.log(friends);

console.log(friends.indexOf("Hubert"));

console.log(friends.includes("Michael"));

if (friends.includes("Norbert")) {
  console.log(`Norbert is here brah`);
} else {
  console.log(`Nobody is home lel`);
}
