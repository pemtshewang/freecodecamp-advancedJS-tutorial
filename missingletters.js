const fearNotLetter = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let startIndex = alphabet.indexOf(str[0])
  let slicedAlpha = alphabet.slice(startIndex, alphabet.indexOf(str[str.length - 1]));
  const filteredChars = Array.from(slicedAlpha).filter(
    word => {
      return !str.includes(word)
    }
  )
  return filteredChars.length !== 0 ? filteredChars[0] : undefined
}

console.log(fearNotLetter("abce"))
