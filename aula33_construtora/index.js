function Pessoa(nome,sobrenome){
    const ID = 9877654;
    const metodoInterno = ()=>{
        
    };
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = ()=>{
        console.log(this.nome + ': sou um método!')
    };
}

const p1 = new Pessoa('Luiz','Otávio');

console.log(p1);