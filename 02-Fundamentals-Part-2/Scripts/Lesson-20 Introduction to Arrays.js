"use strict";
///////////////////////////////////////////////////////////////

// Introduction to Arrays

///////////////////////////////////////////////////////////////

const friend1 = "michael";
const friend2 = "jose";
const friend3 = "steven";

const friends = ["Michael", "Jose", "Steven"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Julia";
console.log(friends);
const DOB = 1998;
const currentYear = 2022;

const norbert = ["Norbert", "Piwka", DOB - currentYear, "Teacher", friends];

console.log(norbert);
// Exercise

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);
