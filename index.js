function random(num1, num2) {
  if (num1 >= num2) {
    throw new Error("num-1 must be smaller than num-2");
  }
  let random = Math.ceil(Math.random() * num2);
  while (!(num1 <= random)) {
    random += (num2 - num1) / 2;
  }
  return random;
}

function geometricMean(...arr) {
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    res *= el;
  }

  res = Math.pow(res, 1 / arr.length);
  return res;
}

function arithmeticMean(...arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    res += el;
  }
  res = res / arr.length;
  return res;
}

module.exports = { random, geometricMean, arithmeticMean };
