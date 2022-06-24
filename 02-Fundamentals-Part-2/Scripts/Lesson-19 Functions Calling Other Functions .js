"use strict";
///////////////////////////////////////////////////////////////

// Functions Calling Other Functions

///////////////////////////////////////////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of Apples and ${orangePieces} pieces of Orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(
      `${firstName} has already retired ${retirement * -1} years ago`
    );
    return retirement;
  }

  // return `${firstName} retires in ${calcAge} years`;
};

console.log(yearsUntilRetirement(1998, "Norbert"));
console.log(yearsUntilRetirement(1954, "Dawid"));
