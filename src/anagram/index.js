function anagram(arrWords) {
  const ans = [];
  const arrAnagramWords = [];
  let counterArrAnagramWords = 0;

  arrWords.forEach((word) => {
    let anagramWord = word.split('');
    anagramWord = anagramWord.sort();
    anagramWord = anagramWord.join('');

    if (!(anagramWord in arrAnagramWords)) {
      arrAnagramWords[anagramWord] = counterArrAnagramWords;
      counterArrAnagramWords += 1;

      ans[arrAnagramWords[anagramWord]] = [word];
    } else {
      ans[arrAnagramWords[anagramWord]].push(word);
    }
  });

  return ans;
}

module.exports = { anagram };
