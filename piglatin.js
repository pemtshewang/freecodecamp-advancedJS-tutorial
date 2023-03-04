function translatePigLatin(str) {
  if(/[aeiou]/.test(str[0])){
    return str+"way";
 }
  if(/[aeiou]/.test(str)){
    for(let i=0; i<str.length; i++){
      if(/[aeiou]/.test(str[i])){
        return str.slice(i)+str.slice(0,i)+"ay";
      }
    }
  }
  return str+"ay";
}

console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("rhythm"))
