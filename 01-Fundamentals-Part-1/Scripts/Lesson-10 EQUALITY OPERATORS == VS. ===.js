///////////////////////////////////////////////////////////////

// EQUALITY OPERATORS: == VS. ===

///////////////////////////////////////////////////////////////

const age = 18;

if (age === 18) console.log("you just became an adult(strict)");

if (age == 18) console.log("you just became an adult(loose)");

const favourite = Number(prompt("what is your favourite number"));
console.log(favourite);

if (favourite === 23) {
  console.log("cool 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not either");
}

if (favourite !== 23) console.log("why not 23?");
