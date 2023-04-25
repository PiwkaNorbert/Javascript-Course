const index = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let prev = 0,
    res = 0;
  for (let char in s.split('').reverse()) {
    if (index[char] >= prev) {
      res += index[char];
    } else {
      res -= index[char];
    }
    prev = index[char];

    return res;
  }
};

romanToInt('X');
