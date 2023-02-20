const eratosthenes = n => {
  let array = [],
    upperLimit = Math.sqrt(n),
    output = [],
    output2 = [],
    output3 = [];
  // Eratosthenes algorithm to find all primes under n
  for (let i = 0; i < n; i++) {
    array.push(true);
  }
  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }
  // All array[i] set to true are primes
  for (let i = 2; i < n; i++) {
    if (array[i]) output.push(`${i}`);
  }
  console.log(`prime:`);
  console.log(output);
  for (let i = 2; i <= n - 2; i++) {
    if (array[i] == true && array[i + 2] == true) {
      output2.push(`${i},${i + 2}`);
    }
  }
  console.log(`twin prime:`);
  console.log(output2);
  for (let j = 0; j <= n - 3; j++) {
    if (
      array[j] == true &&
      array[j + 2] == true &&
      array[j + 6] == true &&
      array[j + 8] == true
    ) {
      output3.push(`${j},${j + 2},${j + 6},${j + 8}`);
    }
  }
  console.log(`prime quadruple:`);
  console.log(output3);

  return output;
};

eratosthenes(100_000);
