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
