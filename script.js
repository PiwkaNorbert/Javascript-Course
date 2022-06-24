/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Franklyn";
console.log(firstName);

let person = "anita";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
// an object is a box in which we can store a value
///////////////////////////////////////////////////////////////

// VARIABLE NAME CONVENTION

///////////////////////////////////////////////////////////////
Number    - let age = 23;

String    - let fourthName = "Norbert";

Boolean   - let studentStatues = True;

Undefined - let adult;
Null      - is an empty value
Symbol    - is unique and cant be changed 
BigInt 

///////////////////////////////////////////////////////////////

// DATA TYPES

///////////////////////////////////////////////////////////////

let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "Norbert");

jsIsFun = "YES!";
console.log(typeof "jsIsFun");

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

///////////////////////////////////////////////////////////////

// LET, CONST AND VAR

///////////////////////////////////////////////////////////////

let age = 30;
age = 31;

console.log;

const birthYear = 1998;

var job = "programmer";
job = "teacher";

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


///////////////////////////////////////////////////////////////

// TAKING DECISIONS: IF

///////////////////////////////////////////////////////////////

const age = 15;
if (age >= 18) {
  console.log("sarah can start her drivers licence 🚗");
} else {
  const yearsLeft = 18 - age;

  console.log(
    `sarah can't start her drivers licence, wait another ${yearsLeft} years kiddo😢`
  );
}

const birthYear = 2012;
let cenrty;

if (birthYear < 2001) {
  centry = 20;
  console.log("you were born in the 20th centry");
} else {
  centry = 21;
  console.log("you were born in the 21st centry");
}


///////////////////////////////////////////////////////////////

// TYPE CONVERSION AND COERCION

///////////////////////////////////////////////////////////////

// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Norbert"));
console.log(typeof Number("Norbert"));

console.log(String(23), 23);

// Type Coercion

console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

///////////////////////////////////////////////////////////////

// TRUTHY AND FALSY VALUES

///////////////////////////////////////////////////////////////

5 falsy values: 0, '', NaN, undefined, null (they will become a false when a boolean)
 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("norbert"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}
let height = 0;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}


///////////////////////////////////////////////////////////////

// EQUALITY OPERATORS: == VS. ===

///////////////////////////////////////////////////////////////

const age = 18;

if (age === 18) console.log("you just became an adult(strict)");

if (age == 18) console.log("you just became an adult(loose)");

const favourite = Number(prompt("what is your favourite number"));
console.log(favourite);

if (favourite === 23) {
  console.log("cool 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not either");
}

if (favourite !== 23) console.log("why not 23?");

///////////////////////////////////////////////////////////////

// BOOLEAN LOGIC AND LOGICAL OPERATORS

///////////////////////////////////////////////////////////////

const hasDriversLicence = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("sarah is able to driver");
// } else {
//   console.log("someone else shoudldrive");
// }

console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("sarah is able to driver");
} else {
  console.log("someone else shoudldrive");
}


///////////////////////////////////////////////////////////////

// THE SWITCH STATEMENT

///////////////////////////////////////////////////////////////

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan my course structure");
    console.log("Go to the gym");
    break;
  case "tuesday":
    console.log("Go to the gym");
    console.log("feed my cat");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Go to the gym");
    console.log("Go do the shopping");
    break;
  case "saturday":
  case "sunday":
    console.log("Go to the gym");
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to the gym");
} else if (day == "tuesday") {
  console.log("Go to the gym");
  console.log("feed my cat");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Go to the gym");
  console.log("Go do the shopping");
} else if (day === "saturday" || day === "sunday") {
  console.log("Go to the gym");
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}


///////////////////////////////////////////////////////////////

// STATEMENTS AND EXPERSSIONS

///////////////////////////////////////////////////////////////

// expressions

3 + 4;
1991;
true && false && !false;

// statement cant be in a templet literal

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);


///////////////////////////////////////////////////////////////

// THE CONDITIONAL (TERNARY) OPERATOR

///////////////////////////////////////////////////////////////

const age = 17;

// age >= 18
//   ? console.log(`I like to drink wine🍷`)
//   : console.log(` i like to dirnk water💧`);

const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
*/
