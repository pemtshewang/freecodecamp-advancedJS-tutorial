function uniteUnique(arr) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i.toString()].map(number => {
      if (!arr.includes(number)) {
        arr.push(number);
      }
    })
  }
  return arr;
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
