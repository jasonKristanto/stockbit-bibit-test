const { anagram } = require('./index');

let testArray;

testArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua', 'makam', 'akan', 'kodok', 'aki', 'apel', 'elap', 'peal'];
console.log(anagram(testArray));

testArray = ['aaa', 'bbb', 'cccc', 'ccc', 'aba', 'baa', 'aab'];
console.log(anagram(testArray));
