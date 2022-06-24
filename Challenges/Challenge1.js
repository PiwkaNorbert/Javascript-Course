/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let marksMass = 78;
let marksMass2 = 95;
let johnsMass = 92;
let johnsMass2 = 85;
const marksHeight = 1.69;
const marksHeight2 = 1.88;
const johnsHeight = 1.95;
const johnsHeight2 = 1.76;

markBMI = marksMass / marksHeight ** 2;
johnBMI = johnsMass / johnsHeight ** 2;
markBMI2 = marksMass2 / marksHeight2 ** 2;
johnBMI2 = johnsMass2 / johnsHeight2 ** 2;
const markHigherBMI = markBMI >= johnBMI;
const markHigherBMI2 = markBMI2 >= johnBMI2;
console.log(
  "Mark's BMI: " +
    markBMI +
    "\nJohn's BMI: " +
    johnBMI +
    "\nis marks bmi higher then johns?"
);
console.log(markHigherBMI);
console.log(
  "Mark's BMI2: " +
    markBMI2 +
    "\nJohn's BMI2: " +
    johnBMI2 +
    "\nis marks bmi higher then johns?"
);
console.log(markHigherBMI2);
