const nome = ['Luiz','Otávio','Henrique'];

for(let i = 0;i < nome.length; i++){
    console.log(nome[i]);
}

for(key in nome){
    console.log(nome[key]);
}

for(valor of nome){
console.log(valor);
}

nome.forEach(function(el,index,ar){
    console.log(el,index,ar);
});