let a = [1,2,3];
// let b = a;
let b = [...a];
let c = b;

console.log(a,b);
b.push(4);
console.log(c,b);

const objA = {
    nome:'Caio',
    sobrenome:'Silva',
    idade:35
}

const objB = {...objA};
objA.nome = 'Dellano';
console.log(objB);

const objC = Object.assign({},objB);
console.log(objC);