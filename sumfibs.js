const sumFibs = (n) => {
  let sum = 0;
  // fibonacci algo
  let a = 0, b = 1;
  while (a <= n) {
    if (a & 1) {
      sum += a;
    }
    let c = a + b;
    a = b;
    b = c;
  }
  return sum;
}
console.log(sumFibs(4000000))

