const nomes = ['Maria','João','Eduardo','Gabriel','Julia'];
// const removidos = nomes.splice(-1,1); //pop();
// const removidos = nomes.splice(0,1); //shif();
// const removidos = nomes.splice(nomes.length,0,'Luiz'); //push();
const removidos = nomes.splice(0,0,'Luiz'); //unshift();

// const removidos = nomes.splice(-3,Number.MAX_VALUE);
// const removidos = nomes.splice(3,2,'Luiz','Otávio');
console.log(nomes, removidos);