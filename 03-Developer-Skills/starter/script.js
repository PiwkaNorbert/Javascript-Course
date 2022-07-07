// Remember, we're gonna use strict mode in all scripts now
'use strict';

console.log();

const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    cutNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (cutNum === nums[j]) return true;
    }
  }
  return false;
};

let nums = [4, 124, 21, 412, 4];
let cutNum;
console.log(containsDuplicate(nums));

const temperature = [4, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [14, -22, -76, -11, 'brah', 59, 131, 172, 145, 154, 9, 52];
const allTemps = temperature.concat(temperature2);
// - what is temp amplitude? the differene between the highest and lowest temp
// - how to compute max and min value
// - whats a sensor error? and what to do?
//-------------------------------------------
// how to ignore errors?
// find min value in temp Array
// find max value in temp Array
// subract min from max (amplitude) and return it

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`the max value is: ${max} and the min value is: ${min}`);
  return max - min;
};

calcTempAltitude([3, 7, 40]);
const amplitude = calcTempAltitude(allTemps);
console.log(amplitude);
console.log(allTemps);

// PROBLEM TWO:
// function should recieve two arrays of temps

//merge 2 arrays, how to merge 2 arrays? XD

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('degrees celsius: ')),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
