import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

(function(doc) {
    const gera = new GeraCpf();
    const cpfGerado = doc.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})(document);