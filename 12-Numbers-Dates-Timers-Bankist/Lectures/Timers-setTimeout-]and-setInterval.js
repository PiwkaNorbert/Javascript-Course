'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}
setInterval(() => {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  console.log(new Intl.DateTimeFormat('en-us', options).format(now));
}, 1000);
