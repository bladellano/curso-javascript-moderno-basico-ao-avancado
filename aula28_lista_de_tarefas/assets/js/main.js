(function (doc) {

    'use stric';

    const inputTarefa = doc.querySelector('.input-tarefa');
    const btnTarefa = doc.querySelector('.btn-tarefa');
    const tarefas = doc.querySelector('.tarefas');

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    inputTarefa.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    function limpaInput(){
        inputTarefa.value='';
        inputTarefa.focus();
    }
    function criaBotaoApagar(li){
        li.innerText += ' ';
        const botaoApagar = doc.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class','apagar btn btn-danger');
        li.appendChild(botaoApagar);
    }
    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerHTML = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    btnTarefa.addEventListener('click', () => {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    doc.addEventListener('click',(e)=>{
        const el = e.target;
        if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas(){
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for(tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar','').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas',tarefasJSON);//Only string.

    }

    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        for(let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }
    adicionaTarefasSalvas();
})(document);