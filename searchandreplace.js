const myReplace = (str, before, after) =>{
  const ifCapitalized = /[A-Z]/.test(before[0]);
  if(ifCapitalized){
    after = after[0].toUpperCase() + after.slice(1)
  }else{
    after = after.toLowerCase()
  }
  return str.replace(before,after);
}

console.log(myReplace("this is a Test string","Test", "checking"))
