const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 12, 13];

const numeroEmDobro = numeros.map(function (v) {
    return v * 2;
});
// console.log(numeroEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map(function(obj){
    return obj.nome;
});
const comIds = pessoas.map(function(obj,key){
    // delete obj.nome;
const newObj = {...obj};
// obj.id = (key + 1)*1000;
newObj.id =  key; 
    return newObj;
});
// console.log(comIds);
console.log(pessoas);