"use strict";
///////////////////////////////////////////////////////////////

// Introduction to Objects

///////////////////////////////////////////////////////////////
const norbert = {
  firstName: "Norbert",
  lastName: "Piwka",
  age: 2022 - 1998,
  occupation: "Teacher",
  friends: ["Lee", "Hubert", "dawid"],
};
console.log(norbert);

console.log(norbert.lastName, norbert.age);
console.log(norbert["lastName"], norbert["age"]);
const nameKey = "Name";
console.log(norbert["first" + nameKey]);
console.log(norbert["last" + nameKey]);

const interestedIn = prompt(
  `what do you want to know about ${norbert["firstName"]}? Choose between firstName, lastName, age, occupation, friends?`
);

if (norbert[interestedIn]) {
  console.log(norbert[interestedIn]);
} else {
  console.log(`Request doesn't exist.`);
}

norbert.location = "Krakow";
norbert["facebook"] = "@norbert piwka";

console.log(norbert);
console.log(
  `${norbert.firstName} has ${norbert.friends.length}, and his best friend is ${norbert.friends[0]}`
);
