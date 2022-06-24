"use strict";

//  Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let neighbours = 0; neighbours < listOfNeighbours.length; neighbours++) {
  for (
    let country = 0;
    country < listOfNeighbours[neighbours].length;
    country++
  ) {
    console.log(`Neighbour: ${listOfNeighbours[neighbours][country]}`);
  }
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----starting exercice ${exercise}----`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`  benchpress repetition ${rep}`);
  }
}
