const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    return (`${nome} ${sobrenome}`);
}

// module.exports.nome = nome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.ultimoNome = 'Qualquer outra coisa!';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;