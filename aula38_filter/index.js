const numeros = [5,50,80,1,2,3,4,5,11,22,15,8,9];
const numerosFiltrados = numeros.filter((val,indice,array)=>{
    return val > 10;
});
// console.log(numerosFiltrados);
const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Letícia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallce',idade:47}
];
/* 
const pessoasComNomeGrande = pessoas
.filter(val=> val.nome.length >= 6);
 */
/* const pessoasComNomeGrande = pessoas
.filter(val=> val.idade > 50); */
const pessoasComNomeGrande = pessoas
.filter(val=> val.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);