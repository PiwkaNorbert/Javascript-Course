/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

//test data 1
let scoreDolphins = calcAverage(44, 23, 69);
let scoreKoalas = calcAverage(65, 54, 48);
//test data 2
console.log(scoreDolphins, scoreKoalas);
scoreDolphins.toFixed(1);
scoreKoalas.toFixed(1);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas}vs. ${avgDolphins})`);
  } else {
    console.log(`No Victory`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

scoreKoalas = calcAverage(23, 34, 27);
scoreDolphins = calcAverage(85, 54, 41);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
////////////////////////////////////////////////////////
const population = [1441, 1380, 329.5, 67.2];
const pOTWP = (percentageOfWorld4) =>
  ((percentageOfWorld4 / 7900) * 100).toFixed(2);
const percentages2 = [
  pOTWP(population[0]),
  pOTWP(population[1]),
  pOTWP(population[2]),
  pOTWP(population[3]),
];

console.log(`China has about ${population[0]} millino people, so it's about ${percentages2[0]}% of the population.
India has about ${population[1]} millino people, so it's about ${percentages2[1]}% of the population.
America has about ${population[2]} millino people, so it's about ${percentages2[2]}% of the population.
`);
/////////////////////////////////////////////////////
function percentage(value, total) {
  return ((value / total) * 100).toFixed(2);
}

const total_population = 7900;
const countries = ["China", "India", "America", "UK"];
const populations = [1441, 1380, 329.5, 67.2];
const percentages = populations.map((x) => percentage(x, total_population));

for (i = 0; i < countries.length; i++) {
  console.log(
    `${countries[i]} has about ${populations[i]} million people, so it's about ${percentages[i]}% of the population`
  );
}
