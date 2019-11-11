(function(){

'use strict';

// const data = new Date();

// const diaSemana = [
//     'Domingo',
//     'Segunda-feira',
//     'Terça-feira',
//     'Quarta-feira',
//     'Quinta-feira',
//     'Sexta-feira',
//     'Sábado'
// ];
// const meses = [
//     'janeiro',
//     'fevereiro',
//     'março',
//     'abril',
//     'maio',
//     'junho',
//     'julho',
//     'agosto',
//     'setembro',
//     'outubro',
//     'novembro',
//     'dezembro'
// ];

// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const time = data.getHours() +':'+data.getMinutes()+':'+data.getSeconds(); 

// let resultado = `${diaSemana[data.getDay()]}, ${dia} de ${meses[mes]} de ${ano} ${time}.`;

let $showData = document.querySelector('#showData');

const data = new Date();
const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
};

$showData.innerHTML = data.toLocaleDateString('pt-BR',opcoes);

})();