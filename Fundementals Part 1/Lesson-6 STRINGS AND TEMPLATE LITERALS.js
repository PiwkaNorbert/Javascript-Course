///////////////////////////////////////////////////////////////

// STRINGS AND TEMPLATE LITERALS

///////////////////////////////////////////////////////////////

const firstName = "Norbert";
const job = "Teacher";
const birthYear = 1998;
const year = 2022;

// OLD WAY OF JOINING STRINGS

const norbert =
  "Hello, I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(norbert);

// TEMPLATE LITERAL

const norbertNew = `Hello, I'm ${firstName}, a ${
  year - birthYear
} year old ${job}!`;
console.log(norbertNew);

console.log(`I'm just a regular string`); // can use ` instead of "" or ''.
console.log("string with \n\
multiple \n\
lines");
console.log(`String
with 
multiple
lines`);
