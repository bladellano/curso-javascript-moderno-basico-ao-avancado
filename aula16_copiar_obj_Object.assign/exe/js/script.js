(function(){

'use strict';

const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
/*form.onsubmit = function(e){
    e.preventDefault();
    // alert('Buhh')
};
*/
const pessoas = [];

// let contador = 0;

function recebeEventoForm(e){
    e.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:peso.value,
        altura:altura.value
    });
// resultado.innerHTML = JSON.stringify(pessoas);
resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
}
 
form.addEventListener('submit',recebeEventoForm);

})();