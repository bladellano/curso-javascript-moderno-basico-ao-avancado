/*Criando classes*/
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return (`${this.nome} está falando!`)
    }
}

function PessoaFConstruct(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
/*Função construtora*/
PessoaFConstruct.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Caio', 'Silva');
const p2 = new PessoaFConstruct('Caio', 'Silva');

console.log('p1', p1);
console.log('p2', p2);