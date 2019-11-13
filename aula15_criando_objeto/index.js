function criaPessoa(nome, sobrenome,idade){
	return {
		nome,
		sobrenome,
		idade, 
		fala(){
			// console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
			console.log(`A minha idade atual é ${this.idade}`);
		},
		incrementaIdade(){
			this.idade++;
		}
}
	};

const pessoa = criaPessoa('Luiz','Otavio',25);
// console.log("Pessoa:", pessoa);
pessoa.incrementaIdade();
console.log(pessoa.fala());