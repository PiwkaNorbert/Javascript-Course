'use strict';

const calcAveHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter(age => age > 18);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(average);
};
const avg1 = calcAveHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAveHumanAge([16, 6, 10, 5, 6, 1, 4]);
