function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        value:  estoque,
        writable:false,
        configurable:true
    });

    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:  nome,
            writable:false,
            configurable:true  
        },
        preco:{
            enumerable:true,
            value:  preco,
            writable:false,
            configurable:true
        },
    })
}

const p1 = new Produto('Camiseta',20,3);
p1.estoque = 50000;
console.log(p1);

for(chave in p1){
    console.log(chave);
}