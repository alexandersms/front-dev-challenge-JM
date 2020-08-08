export const removerAccent = (string) => {
    const mapAccentHex = {
      a: /[\xE0-\xE6]/g,
      e: /[\xE8-\xEB]/g,
      i: /[\xEC-\xEF]/g,
      o: /[\xF2-\xF6]/g,
      u: /[\xF9-\xFC]/g,
      c: /\xE7/g
    }
  
    for (let letter in mapAccentHex) {
      var expressionRegular = mapAccentHex[letter]
      string = string.replace(expressionRegular, letter)
    }
  
    return string
  }