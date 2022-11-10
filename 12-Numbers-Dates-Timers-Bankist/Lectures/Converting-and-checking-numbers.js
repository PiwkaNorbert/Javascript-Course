'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing

console.log(Number.parseInt('20px', 10)); // 10 or 2 for decimal or binary
console.log(Number.parseInt('e20', 10)); // needs to start with a number and removes strings
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));
console.log('isNaN');
// Checking if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));
// Checking if value is number
console.log('isFinite');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23, 0));
console.log(Number.isInteger(23 / 0));
