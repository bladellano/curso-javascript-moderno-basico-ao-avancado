const _velocidade = Symbol('velocidade'); /*Atributo privado criado*/

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(v) {
        console.log('SETTER');
        if (typeof v !== 'number') return;
        if (v >= 100 || v <= 0) return;
        this[_velocidade] = v;

    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) { /*Acelerando até 200km/h*/
    c1.acelerar();
}
/*
c1.velocidade = 99;
console.log(c1.velocidade);*/


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(v) {
        v = v.split(' ');
        this.nome = v.shift();
        this.sobrenome = v.join(' ');
    }
}

const p1 = new Pessoa('Caio', 'Silva');
p1.nomeCompleto = 'Caio Dellano Nunes da Silva';
console.log(p1.nome, p1.sobrenome);
console.log(p1.sobrenome);

const p2 = new Pessoa('asdasd', 'dsdasdasd');

console.log(p2);