"use strict";

//        Looping Arrays, Breaking, and Continuing

const countries = ["China", "India", "America", "The UK"];
const population = [1441, 1380, 329.5, 67.2];
const pOTWP = (percentageOfWorld4) =>
  ((percentageOfWorld4 / 7900) * 100).toFixed(2);
for (let i = 0; i < 4; i++) {
  console.log(
    `${countries[i]} has about $${
      population[i]
    } million people, so it's about ${pOTWP(population[i])}% of the population`
  );
}
const has4Elements = 4;
if (population.length === has4Elements) {
  console.log("True");
} else {
  console.log("False");
}
