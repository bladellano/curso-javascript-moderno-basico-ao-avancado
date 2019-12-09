const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
/*
const numerosPares = numeros.filter(function(v){
    return v % 2 === 0;
}).map(function(v){
    return v * 2;
}).reduce(function(ac,v){
    return ac + v;
});
   */

const numerosPares = numeros
.filter(v => v % 2 === 0)
.map((v)=> v * 2)
.reduce((ac,v) => ac + v );

console.log( numerosPares );

const total = numeros.reduce(function(ac,v,key,arr){
    // if(v % 2 !== 0) ac.push(v); // Somente pares.
    ac.push(v*2); //Dobro do valor.
    return ac;
},[]);

// console.log(total); 

const pessoa = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:10},
    {nome:'Rosana',idade:64},
    {nome:'Wallace',idade:63}
];

const maisVelha = pessoa.reduce(function(ac,v){
    if(ac.idade > v.idade) return ac;
    return v;
});
// console.log(maisVelha);