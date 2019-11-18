(function(doc){

'use strict';

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000) ;
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone:'GMT'
        });
    }

    const relogio = doc.querySelector('.relogio');
    // const iniciar = doc.querySelector('.iniciar');
    // const pausar = doc.querySelector('.pausar');
    // const zerar = doc.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
            timer = setInterval(()=>{
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        },1000)
    }

    doc.addEventListener('click',(e)=>{
        const el = e.target;
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.classList.remove('pausado');
            segundos = 0;
            relogio.innerHTML ='00:00:00';
        }
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);  
            iniciaRelogio();
        }
        if(el.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);  
        }
    }); 

})(document);