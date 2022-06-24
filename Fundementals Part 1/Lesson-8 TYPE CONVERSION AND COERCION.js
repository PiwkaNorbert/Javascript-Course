///////////////////////////////////////////////////////////////

// TYPE CONVERSION AND COERCION

///////////////////////////////////////////////////////////////

// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Norbert"));
console.log(typeof Number("Norbert"));

console.log(String(23), 23);

// Type Coercion

console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
