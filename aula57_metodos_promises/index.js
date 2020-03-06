function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') return reject(new Error('Param is not string'));

            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    // esperaAi(1000, 1000),
    // 'Outro valor'
];

// Promise.all(promises)
/* Promise.race(promises)
    .then(v => {
        console.log(v);
    })
    .catch(erro => {
        console.log(erro);
    }) */

function baixaPagina() {
    const emCache = true;
    if (emCache) {
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));