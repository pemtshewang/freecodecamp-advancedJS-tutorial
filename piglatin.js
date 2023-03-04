function translatePigLatin(str) {
  return /[aeiou]/.test(str[0]) ? str+"way" : str.slice(1)+str[0]+"ay";
}

console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("cat"))
