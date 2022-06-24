
///////////////////////////////////////////////////////////////

// TRUTHY AND FALSY VALUES

///////////////////////////////////////////////////////////////

5 falsy values: 0, '', NaN, undefined, null (they will become a false when a boolean)
 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("norbert"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}
let height = 0;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

