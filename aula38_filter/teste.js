//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function sortfunction(a, b) {
    return (a - b); //faz com que o array seja ordenado numericamente e de ordem crescente.
}

function processarLinha(linha) {

    if (typeof linha == 'object') {
        let newArray = linha.sort(sortfunction);
        let aux = newArray[0];
        for (let i = 0; newArray.length > i; i++) {
            if (newArray[i] !== aux + i) return aux + i;
        }
    }
    return linha;
}

//Esta função geralmente não é alterada, mas você pode alterar sem problemas, se achar necessário.
function main(entradas) {

    const linhas = entradas.split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.

    for (let i = 0; i < linhas.length; i++) {
        let linha_entrada;
        try {
            linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
        } catch {
            linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
        }
        if (linha_entrada !== "") {
            const resultado_processado = processarLinha(linha_entrada);
            if (resultado_processado) {
                console.log(resultado_processado);
            }
        }
    }
}

let conteudo = "3\n[4,2,3,1,6]\n[10,12,14,11,15]\n[12032,12030,12031,12034,12036,12035]";
console.log(main(conteudo));
 
  //o codigo abaixo nao deve ser alterado, só serve pra processar os inputs.
/*   process.stdin.resume();
  process.stdin.setEncoding("utf-8");
  var stdin_input = "";
  process.stdin.on("data", function (input) {
      stdin_input += input;
  });
  process.stdin.on("end", function () {
     main(stdin_input);
  }); */