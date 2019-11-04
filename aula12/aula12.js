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
let outraString = "O rato roeu a roupa do rei de roma.";
console.log('chartAt:',umaString.charAt(6));
console.log('CharCodeAt:',umaString.charCodeAt(6)); //Procura na tabela asc
console.log('indexOf:',umaString.indexOf('texto'));
console.log('lastIndexOf:',umaString.lastIndexOf('m',3));
console.log(umaString.match(/[a-z]/g));
console.log('search:',umaString.search(/x/));
console.log('replace:',umaString.replace('Um','Dois'));
console.log('replace:',outraString.replace(/r/g,'#'));
console.log('slice:',outraString.slice(2,6));//rato
console.log('slice:',outraString.slice(-5));//roma
console.log('split:',outraString.split(' '));//roma
console.log('split:',outraString.split(' ',2));//roma