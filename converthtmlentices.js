const dictHTML = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&apos;"
}
const convertHtml = (str) => {
  let charArray = Array.from(str)
  charArray = charArray.map(char => {
    if (dictHTML.hasOwnProperty(char)) {
      return dictHTML[char];
    }
    return char;
  })
  return charArray.join("")
}

console.log(convertHtml("Stuff in \"quotation marks\""))
