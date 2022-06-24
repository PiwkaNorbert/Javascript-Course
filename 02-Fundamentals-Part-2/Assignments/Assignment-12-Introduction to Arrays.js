"use strict";
//-------        Introduction to Arrays          -------
// 1.

const population = [1441, 1380, 329.5, 67.2];
const pOTWP = (percentageOfWorld4) =>
  ((percentageOfWorld4 / 7900) * 100).toFixed(2);
const percentages2 = [
  pOTWP(population[0]),
  pOTWP(population[1]),
  pOTWP(population[2]),
  pOTWP(population[3]),
];
console.log(`China has about ${population[0]} millino people, so it's about ${percentages2[0]}% of the population.
India has about ${population[1]} millino people, so it's about ${percentages2[1]}% of the population.
America has about ${population[2]} millino people, so it's about ${percentages2[2]}% of the population.
The UK has about ${population[3]} millino people, so it's about ${percentages2[3]}% of the population.
`);
const has4Elements = 4;
if (population.length === has4Elements) {
  console.log("True");
} else {
  console.log("False");
}
