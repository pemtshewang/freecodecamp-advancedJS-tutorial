function spinalCase(str) {
  for(let i=1; i<str.length; i++){
    if(/[a-zA-Z]/.test(str[i-1])&& /[A-Z]/.test(str[i])){
      str = str.slice(0,i) + "-" + str.slice(i);
    }
  }
  const regex = /\s|_|-/
  let returnArr = str.split(regex).map(word => word.toLowerCase());
  return returnArr.join("-");
}
console.log(spinalCase("AllThe-small Things"));

