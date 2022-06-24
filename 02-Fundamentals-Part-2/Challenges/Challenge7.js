/*
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

// markBMI = marksMass / marksHeight ** 2;
// johnBMI = johnsMass / johnsHeight ** 2;

// console.log(
//   `Is marks BMI(${markBMI.toFixed(1)}) higher than johns BMI(${johnBMI.toFixed(
//     1
//   )})?`
// );
// if (markBMI >= johnBMI) {
//   console.log("Of course Mark's BMI is higher than John's!");
// } else {
//   console.log("Of course John's BMI is higher than Mark's!");
// }

const markMiller = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};
const johnSmith = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};
if (johnSmith.calcBMI() > markMiller.calcBMI()) {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnSmith.calcBMI()}) is higher than ${
      markMiller.fullName
    }'s BMI of (${markMiller.calcBMI()})`
  );
} else {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.calcBMI()}) is higher than ${
      johnSmith.fullName
    }'s BMI of ${johnSmith.calcBMI()}`
  );
}
