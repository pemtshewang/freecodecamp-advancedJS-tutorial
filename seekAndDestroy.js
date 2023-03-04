function args(number){
  const filterNumbers = Object.values(arguments).slice(1);
  const filteredArray = number.filter(value => {
    return !filterNumbers.includes(value);
  })
  return filteredArray;
}



