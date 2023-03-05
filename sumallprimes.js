const isPrime = (n) => {
  if (n <= 1) {
    return false
  }
  for (let i = 2; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
const sumPrimes = (num) => {
  let sum = 0;
  while (num > 1) {
    if (isPrime(num)) {
      sum += num;
    }
    num--;
  }
  return sum > 0 ? sum + 2 : sum;
}
console.log(sumPrimes(977))
