const getPrimes = (max) => {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
};

const main = () => {
  var primes = getPrimes(1000);

  let sum = primes.reduce(function (sum, i) {
    return sum + i;
  });
  return sum;
};

console.log(main());
