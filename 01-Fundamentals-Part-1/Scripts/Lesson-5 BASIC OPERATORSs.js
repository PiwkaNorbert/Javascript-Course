///////////////////////////////////////////////////////////////

// BASIC OPERATORS

///////////////////////////////////////////////////////////////

// Mathematic Operators
const now = 2022;

const ageNorbert = now - 1998;
const ageDawid = now - 1997;
console.log(ageDawid + ", " + ageNorbert);

console.log(ageDawid * 2 + ", " + ageDawid / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2*2*2
const firstName = "Norbert";
const lastName = "Piwka";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators

console.log(ageDawid > ageNorbert);
console.log(ageNorbert >= 18);

const isFullAge = ageNorbert >= 18;
console.log("\n" + isFullAge);

console.log(now - 1998 > now - 2022);

const now = 2022;

const ageNorbert = now - 1998;
const ageDawid = now - 1997;

console.log(now - 1998 > now - 2022);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avarageAge = (ageDawid + ageNorbert) / 2;
console.log(ageDawid, ageNorbert, avarageAge);
