'use strict';
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));

x.fill(1);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const y = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(y);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/
//////////////////////////////

// ARRAY METHOD PRACTICE

//////////////////////////////
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur);

console.log(bankDepositSum);
// 2. flatmap filter
// const numDeposits100 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits100);
// REDUCE
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4.
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// const arr3 = [[1, [2, 3]], [4, 5, 6], 7, 8];
// console.log(arr3.flat(3));
/*
console.log(movements);
//  EQUALITY
console.log(movements.includes(-130));
// SOME: CONDITION  // one contdition true
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
// EVERY //every condition is true

console.log(movements.every(mov => mov === -130));
console.log(account4.movements.every(mov => mov > 0));

// SEPARATE CALLBACK

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);
// FlatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);

// Sort Strings
const owners = ['Norbert', 'Mateusz', 'Piotrek'];
console.log(owners.sort());
console.log(owners);

// Sort Numbers
console.log(movements);
console.log(movements.sort());

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

const firstWithdrawl = movements.find(mov => mov < 0);
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // for (const accountForOfLoop of accounts) {if (accountForOfLoop.owner === 'Jessica Davis') {console.log(accountForOfLoop);}}

//
// console.log(deposits);
const eurToUsd = 1.1;
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   // console.log(arr);
  //   return mov * eurToUsd;
  // })
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0); // only stack methods if it returns an array
// console.log(totalDepositsUSD);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// ----------REDUCE -----------
// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(movements);
console.log(`balance 1: ${balance}`);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); //max or min have to be the first value of an array
console.log(max);

////////////////////////
const max2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
); //max or min have to be the first value of an array
console.log(max2);

// ----------FILTER -----------
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// ----------MAP -----------

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);

const movementsDescriptions = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${mov}`;
});
console.log(movementsDescriptions);
*/
