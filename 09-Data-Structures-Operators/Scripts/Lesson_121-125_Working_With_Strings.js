"use strict";
console.log(
  `////////////////////////////////////////////////////////////////////
  
  //  Working with strings P1
  
////////////////////////////////////////////////////////////////////
`
);

////////////////////////////////////////////////////////////////////

//  Working with strings P1

////////////////////////////////////////////////////////////////////
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);

console.log("B737".length);
console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal")); // Case sensetive

console.log(airline.slice(4)); // SLICE MAKES IT SO THE STRINGS STARTS AT A NEW POSITION
const airPort = airline.slice(4, 7); // Stop extracting before the 7th index (end - begining)
console.log(airPort);
console.log(airline);

//not hardcoding
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2)); // Negative goes backwards
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "E" || s === "B") console.log("this is a middle seat");
  else console.log("Not a middle seat");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(
  `////////////////////////////////////////////////////////////////////
  
  //  Working with strings P2
  
////////////////////////////////////////////////////////////////////
`
);
////////////////////////////////////////////////////////////////////

//  Working with strings P2

////////////////////////////////////////////////////////////////////

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passanger = "jOnAs"; // -> should be Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);
// Comparing email
const email = "hello@norbert.io";
const loginEmail = "  Hello@Norbert.io \n";

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passaengers come to boarding door 23.  Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans (includes, starts with and ends with)

const plane2 = "Airbus A320";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("Air"));
console.log(plane2.endsWith("Air"));
if (plane2.startsWith("Airbus") && plane2.endsWith("neo"))
  console.log("it belongs to the family");
else console.log("it doesnt");

// Pricetice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife" || "gun"))
    console.log("youre not allowed on board");
  else console.log("Welcome aboard");
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("socks and a camera");
checkBaggage("Got some snacks and a gun for protection");
console.log(
  `////////////////////////////////////////////////////////////////////
    
  //  Working with strings P3
    
////////////////////////////////////////////////////////////////////
`
);

////////////////////////////////////////////////////////////////////

//  Working with strings P3

////////////////////////////////////////////////////////////////////

// SPLIT AND JOIN

console.log(..."a+very+nice+string".split("+"));
console.log("Norbert Piwka".split(" "));
const [firstName, lastName] = "Norbert Piwka".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toLocaleUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("norbert piwka");
capitalizeName("lee goymer");

// PADDING
const message = " Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(" Norbert ".padStart(23, "+").padEnd(40, "+"));

// MASKING

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(2387438987236721));
console.log(maskCreditCard("1267389412678342"));

// REPEAT
const message2 = "Bad weather... All departues delayed...\n";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
console.log(
  `////////////////////////////////////////////////////////////////////
    
  //  Working with strings (Custom Exercise, working with imported data)
    
////////////////////////////////////////////////////////////////////
`
);
////////////////////////////////////////////////////////////////////

//  Working with strings P4

////////////////////////////////////////////////////////////////////

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
console.log(`
/////////////////////////////////////  
          Before Formatting
///////////////////////////////////// 
${flights}`);
console.log(`
///////////////////////////////////// 
          After Formatting
/////////////////////////////////////
`);
// caps 3 letters and trim after;
const getCode = (str) => str.slice(0, 3).toUpperCase();
// TODO
// split by +
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  // If flight is delayed add a red circle
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45); // Make it so its nicely aligned

  console.log(output);
}
