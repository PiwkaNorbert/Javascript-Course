"use strict";
console.log(
  `////////////////////////////////////////////////////////////////////
    
  //  Challenge 14
    
////////////////////////////////////////////////////////////////////
`
);
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.

// Your tasks:
// HINTS:

// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

const challenge14 = function () {
  const text =
    "underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure";
  const rows = text.split("\n");
  console.log(`
/////////////////////////////////////  
        Before Formatting
///////////////////////////////////// 
${text}`);
  console.log(`
///////////////////////////////////// 
        After Formatting
/////////////////////////////////////
`);

  for (const [i, row] of rows.entries()) {
    const [key, value] = row.toLowerCase().trim().split("_");
    const output = `${key}${value.replace(value[0], value[0].toUpperCase())}`;

    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
};
// Made it so its an event listener and a typical function
challenge14();
document.querySelector("button").addEventListener("click", challenge14);

/*
1. Remember which character defines a new line in the textarea � \r\n
 § The solution only needs to work for a variable made out of 2 words, like a_b 
*/
/*
2. The input will come from a textarea inserted into the DOM (see code below to
*/
/*
3. insert the elements), and conversion will happen when the button is pressed.

*/
/*
4. insert the elements), and conversion will happen when the button is pressed.
*/
