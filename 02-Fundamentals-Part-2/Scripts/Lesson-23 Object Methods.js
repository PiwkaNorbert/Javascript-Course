"use strict";
///////////////////////////////////////////////////////////////

// Object Methods

///////////////////////////////////////////////////////////////
const norbert = {
  firstName: "Norbert",
  lastName: "Piwka",
  birthYear: 1998,
  occupation: "Teacher",
  friends: ["Lee", "Hubert", "dawid"],
  hasDriversLicence: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  calcLicence2: function () {
    return this.hasDriversLicence ? "a" : "no";
  },
};
console.log(norbert.calcAge());
console.log(norbert.age);

console.log(
  `${norbert.firstName} is a ${norbert.age}-year old ${
    norbert.occupation
  }, and he has ${norbert.calcLicence2()} drivers licence`
);
