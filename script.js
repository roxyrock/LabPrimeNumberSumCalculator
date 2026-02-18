function sumPrimes(number) {
  let sum = 0;
  if (number < 2) {
    return 0;
  }
  for (let i = 2; i <= number; i++) {
    if (primeNumbers(i)) {
      sum += i;
    }
  }
  return sum;
}

function primeNumbers(num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  } return true;
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
console.log(sumPrimes(2));
console.log(sumPrimes(0));
console.log(sumPrimes(977));