"use strict";
///////////////////////////////////////////////////////////////

// Function Declarations vs. Expressions

///////////////////////////////////////////////////////////////

// Function declaration (can be called before the function)

const age1 = calcAge1(1998);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
// const age1 = calcAge1(1998);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1994);
console.log(`${age1}, ${age2}`);
