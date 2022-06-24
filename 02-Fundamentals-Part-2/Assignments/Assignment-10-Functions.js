"use strict";
//------------------Functions-------------------
// 1.

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const polandDescription = describeCountry("Poland", 39, "Warsaw");
console.log(polandDescription);

const finlandDescription = describeCountry("Finland", 6, "Helsinki");
console.log(finlandDescription);

const norwayDescription = describeCountry("Norway", 5.4, "Oslo");
console.log(norwayDescription);
