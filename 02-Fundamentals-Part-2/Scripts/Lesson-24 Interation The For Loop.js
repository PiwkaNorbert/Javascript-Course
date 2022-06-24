"use strict";
///////////////////////////////////////////////////////////////

// Interation The For Loop

///////////////////////////////////////////////////////////////
console.log("lifting weights repetition 1");
console.log("lifting weights repetition 2");
console.log("lifting weights repetition 3");
console.log("lifting weights repetition 4");
console.log("lifting weights repetition 5");
console.log("lifting weights repetition 6");
console.log("lifting weights repetition 7");
console.log("lifting weights repetition 8");
console.log("lifting weights repetition 9");
console.log("lifting weights repetition 10");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

const norbert = [
  "Norbert",
  "Piwka",
  2022 - 1998,
  "Teacher",
  ["Lee", "Hubert", "dawid"],
  true,
];
const types = [];
for (let i = 0; i < norbert.length; i++) {
  // types[i] = typeof norbert[i];
  console.log(norbert[i], typeof norbert[i]);
  types.push(typeof norbert[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// CONTINUE
console.log("--- ONLY STRINGS---");
for (let i = 0; i < norbert.length; i++) {
  if (typeof norbert[i] !== "string") continue;

  console.log(norbert[i], typeof norbert[i]);
}
// BREAK
console.log("--- IF I FIND A VALUE STOP THE LOOP---");
for (let i = 0; i < norbert.length; i++) {
  if (typeof norbert[i] === "number") break;

  console.log(norbert[i], typeof norbert[i]);
}
