'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES (modulo)
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDayPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

const num = 4124214.23;
const options = { style: 'unit', unit: 'mile-per-hour' };

console.log(`US: `, new Intl.NumberFormat('en-US', options).format(num));
console.log(`Ger: `, new Intl.NumberFormat('de-DE', options).format(num));
console.log(`Poland: `, new Intl.NumberFormat('pl-pl', options).format(num));
console.log(`Syria: `, new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
