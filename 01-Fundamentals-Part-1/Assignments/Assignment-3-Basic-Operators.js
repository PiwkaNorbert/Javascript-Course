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
