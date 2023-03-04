const pairElement = (str) => {
  let returnArr = [];
  for(let i=0; i<str.length; ++i){
    switch(str[i]){
      case 'A':
        returnArr.push([str[i],'T'])
        break;
      case 'T':
        returnArr.push([str[i],'A'])
        break;
      case 'C':
        returnArr.push([str[i],'G'])
        break;
      default:
        returnArr.push([str[i],'C'])
    }
  }
  return returnArr;
}
 
console.log(pairElement("CTCTA"))
