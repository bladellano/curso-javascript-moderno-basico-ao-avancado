function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100));
}

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100));
}

const p2 = {
    nome: 'Caneca',
    preco: 15
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(45.5);
// console.log(p1);

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    peso: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 55.5
    }
});

p3.aumento(22.5)
console.log(p3);