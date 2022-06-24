"use strict";
//------- Function Declarations vs. Expressions -------

// 1.
const chinaPopulation = 1441;
const indiaPopulation = 1380;
const americaPopulation = 329.5;

const polandPopulation = 37.95;
const norwayPopulation = 5.4;
const finlandPopulation = 6;

const australiaPopulation = 25.69;
const ukPopulation = 67.2;
const canadaPopulation = 38.01;

// Declaration Function
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}
const percentage1 = percentageOfWorld1(chinaPopulation);
const percentage2 = percentageOfWorld1(indiaPopulation);
const percentage3 = percentageOfWorld1(polandPopulation);
console.log(`China has about ${chinaPopulation} millino people, so it's about ${percentage1}% of the population.
India has about ${indiaPopulation} millino people, so it's about ${percentage2}% of the population.
America has about ${americaPopulation} millino people, so it's about ${percentage3}% of the population.`);
// Expression Function
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};
const percentage4 = percentageOfWorld2(polandPopulation);
const percentage5 = percentageOfWorld2(norwayPopulation);
const percentage6 = percentageOfWorld2(finlandPopulation);

console.log(`China has about ${polandPopulation} millino people, so it's about ${percentage4}% of the population.
India has about ${norwayPopulation} millino people, so it's about ${percentage5}% of the population.
America has about ${finlandPopulation} millino people, so it's about ${percentage6}% of the population.`);
// Arrow Function

const percentageOfWorld3 = (population) =>
  ((population / 7900) * 100).toFixed(2);
const percentage7 = percentageOfWorld3(canadaPopulation);
const percentage8 = percentageOfWorld3(ukPopulation);
const percentage9 = percentageOfWorld3(australiaPopulation);
console.log(`Canada has about ${canadaPopulation} million peopl, so it's about ${percentage7}% of the population.
The UK has about ${ukPopulation} million people, so it's about ${percentage8}% of the population.
Australia has about ${australiaPopulation} million people, so it's about ${percentage9}% of the population.`);
