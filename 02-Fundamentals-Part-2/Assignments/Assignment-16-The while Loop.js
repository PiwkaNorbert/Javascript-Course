"use strict";

//                          The while Loop

const countries = ["China", "India", "America", "The UK"];
const population = [1441, 1380, 329.5, 67.2];
const pOTWP = (percentageOfWorld4) =>
  ((percentageOfWorld4 / 7900) * 100).toFixed(2);

let i = 0;
while (i < 4) {
  console.log(
    `${countries[i]} has about $${
      population[i]
    } million people, so it's about ${pOTWP(population[i])}% of the population`
  );
  i++;
}
const has4Elements = 4;
if (population.length === has4Elements) {
  console.log("True");
} else {
  console.log("False");
}
