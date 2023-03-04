function whatIsInAName(collection, source){
  let answer = [];
  for(let item of collection){
    let count = 0;
    for(key in source){
      if(item[key] === source[key]){
        count++;
      }
    }
    if(count === Object.keys(source).length){
      answer.push(item)
    }
  }
  return answer;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
