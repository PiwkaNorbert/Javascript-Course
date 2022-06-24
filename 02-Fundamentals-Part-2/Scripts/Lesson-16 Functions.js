"use strict";
///////////////////////////////////////////////////////////////

// Functions

///////////////////////////////////////////////////////////////

function logger() {
  console.log(`my name is Nobrert`);
}
// Calling, Running, Invoking a function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
