let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB,varC, varA]
/* const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp; */

console.log(varA, varB, varC);

let umaString = "Um texto";
console.log(umaString.charAt(6));
console.log(umaString.charCodeAt(6)); //Procura na tabela asc
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('m',3));
console.log(umaString.match(/[a-z]/g));