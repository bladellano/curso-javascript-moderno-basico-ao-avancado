function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está falando ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Luiz','Otávio');

// console.log(p1);
console.log(p1.fala('sobre JS'));