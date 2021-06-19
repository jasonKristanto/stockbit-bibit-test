const { validateRefactorSolution } = require('./index');

let testString;

testString = '(halo semuanya) (hehe)';
validateRefactorSolution(testString);

testString = 'halo semuanya (wefwefw)';
validateRefactorSolution(testString);

testString = '(halo semuanya';
validateRefactorSolution(testString);

testString = '()';
validateRefactorSolution(testString);

testString = '(i)';
validateRefactorSolution(testString);

testString = '(a i) awefawef';
validateRefactorSolution(testString);
