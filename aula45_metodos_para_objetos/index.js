/* Object.assign(des,any)
Object.getOwnPropertyDescriptor(o,'prop')
...(spread) */

//Ja vimos
/* Object.keys
Object.freeze
Object.defineProperties
Object.defineProperty */

const produto = { nome: 'Caneca', preco: 1.8 };
// Object.freeze(produto);
produto.nome = 'Outro nome';
// const outraCoisa = {...produto, material: 'Porcelana' };
const outraCoisa = Object.assign({}, produto, { material: 'Porcelana' });

produto.nome = 'Luiz Otávio';
outraCoisa.preco = 2.0;
// console.log(produto);
// console.log(outraCoisa);
// console.log(Object.keys(outraCoisa));
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});

/* console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
console.log(Object.values(produto));
console.log(Object.entries(produto)); */

for (let valor of Object.entries(produto)) {
    console.log(valor[0], ' - ', valor[1]);
}