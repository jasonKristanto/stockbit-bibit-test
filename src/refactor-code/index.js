function findFirstStringInBracket(str){
  if(str.length > 0){
    let indexFirstBracketFound = str.indexOf("(");
    if(indexFirstBracketFound >= 0){
      let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
      if(wordsAfterFirstBracket){
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if(indexClosingBracketFound >= 0){
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        }
        else{
          return '';
        }
      }else{
        return '';
      }
    }else{
      return '';
    }
  }else{
    return '';
  }
}

function findFirstStringInBracketRefactored(str) {
  if (str.length > 0 && str.indexOf('(') >= 0) {
    const indexFirstBracketFound = str.indexOf('(');
    const indexClosingBracketFound = str.indexOf(')');

    if (indexFirstBracketFound >= 0 && indexClosingBracketFound > indexFirstBracketFound) {
      return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound);
    }
  }

  return '';
}

function validateRefactorSolution(testString) {
  console.log(`original ans  : ${findFirstStringInBracket(testString)}`);
  console.log(`refactored ans: ${findFirstStringInBracketRefactored(testString)}`); console.log('');
}

module.exports = { validateRefactorSolution };
