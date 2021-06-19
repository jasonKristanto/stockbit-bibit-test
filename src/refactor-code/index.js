function findFirstStringInBracket(str) {
  if (str.length > 0 && str.indexOf('(') >= 0) {
    const indexFirstBracketFound = str.indexOf('(');
    const indexClosingBracketFound = str.indexOf(')');

    if (indexFirstBracketFound >= 0 && indexClosingBracketFound > indexFirstBracketFound) {
      return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound);
    }
  }

  return '';
}

console.log(`ans: ${findFirstStringInBracket('(halo semuanya) (hehe)')}`); console.log('');
console.log(`ans: ${findFirstStringInBracket('halo semuanya')}`); console.log('');
console.log(`ans: ${findFirstStringInBracket('(halo semuanya')}`); console.log('');
console.log(`ans: ${findFirstStringInBracket('()')}`); console.log('');
console.log(`ans: ${findFirstStringInBracket('(i)')}`); console.log('');
