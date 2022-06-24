///////////////////////////////////////////////////////////////

// BOOLEAN LOGIC AND LOGICAL OPERATORS

///////////////////////////////////////////////////////////////

const hasDriversLicence = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("sarah is able to driver");
// } else {
//   console.log("someone else shoudldrive");
// }

console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("sarah is able to driver");
} else {
  console.log("someone else shoudldrive");
}
