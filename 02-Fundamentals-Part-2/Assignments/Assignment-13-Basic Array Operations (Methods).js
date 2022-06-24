//---------------Basic Array Operations (Methods)-----------------------

"use strict";
=                   
const country = "Poland";
const countryNeighbours = [
  "Germany",
  "the Czech Republic",
  "Ukraine",
  "Belarus",
  "Lithuania",
  "Russia",
];
countryNeighbours.push("Utopia");
console.log(countryNeighbours);
countryNeighbours.pop();
console.log(countryNeighbours);
if (!countryNeighbours.includes("Germany")) {
  console.log("Probably not a central European country :)");
} else {
  console.log("Probably a central European country :>");
}

countryNeighbours[2] = "Sweden";
console.log(countryNeighbours);




const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "Polish",
  population: 37.95,
  countryNeighbours: [
    "Germany",
    "the Czech Republic",
    "Ukraine",
    "Belarus",
    "Lithuania",
    "Russia",
  ],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} Million ${this.language}-speaking people, ${this.countryNeighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
};

console.log(
  `${myCountry.country} Has ${myCountry.population} Million ${myCountry.language}-speaking people, ${myCountry.countryNeighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.describe();

for (let voters = 1; voters <= 50; voters++) {
  console.log(`Voter Number ${voters} is currently voting`);
}
