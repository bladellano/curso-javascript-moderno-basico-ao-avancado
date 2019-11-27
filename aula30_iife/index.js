(function(){
    const sobrenome = 'Miranda';
    function criarNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criarNome('Luiz'));
    }

    falaNome();
    console.log(arguments);
})(1,2);