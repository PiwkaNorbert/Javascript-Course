//---------------------Values and Vairables-------------------

// 1.
const country = "Poland";
const continent = "Europe";
const population = 37.95;
// 2.
// console.log(country, continent, population);
//---------------------Data Types-----------------------------

// 1.
const isIsland = false;
const language = "polish";
// 2.
/* console.log(
  "Is " +
    country +
    " an island?: " +
    isIsland +
    "\nWhat is the Population? It's: " +
    population +
    "\nWhat is the mothertongue?\nUnfortunately it's " +
    language
);

console.log(
  "Types of values:\n" + typeof country,
  typeof isIsland,
  typeof population,
  typeof language
);
//--------------------Basic Operators------------------------------

// 1.
console.log(
  "If you split poland into two halves, there would be " +
    population / 2 +
    " people in each half"
);
// 2.
population++;
console.log(population);
// 3.
const secondCountry = "Finland";
let secondPopulation = 6;
console.log(
  secondCountry +
    "'s Population is: " +
    secondPopulation +
    "\n" +
    country +
    "'s Population is: " +
    population +
    "\nis Poland's population greater than Finlands?"
);
console.log(population >= secondPopulation);
// 4.
const avaragePopulation = 33;

console.log(avaragePopulation >= population);

// 5.

const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description);
//---------------STRINGS AND TEMPLATE LITERALS-----------------------

// 1.
const descriptionTemplateLiteral = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(descriptionTemplateLiteral);

//-------------Taking Decisions: if / else Statements------------------

// 1.

if (population >= 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population ${population} million below average`);
}

//------------------Type Conversion and Coercion-----------------------

// 1.

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617 number + a string
console.log("19" - "13" + 17); // 23 number + a number
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143


//---------------- Equality Operators: == vs. === ---------------------

// 1.

const numNeighbours = Number(
  prompt("How many neighbour countries does your country 1have?")
);
console.log(numNeighbours);
// 2.
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// She wants to live in a country that speaks english, has less than 50 million people and is not an island.

// sarahsCriteria

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} Sarah`);
} else {
  console.log(`you shouldn't live in ${country} Sarah`);
}
//---------------------- The switch Statement ---------------------------

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`MOST numer of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in numer of native speakers`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  case "hindi":
    console.log(`Number 4`);
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too`);
}

//------------- The Conditional (Ternary) Operator---------------------
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} avarage`
);
*/