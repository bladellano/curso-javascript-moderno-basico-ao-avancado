function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
/* function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb();
    }, tempo);
} */
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Param is not string'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com BANCO', rand(1, 3))
    .then(resp => {
        console.log(resp);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resp => {
        console.log(resp);
        // return esperaAi('Tratando os dados da BASE', rand(1, 3));
        return esperaAi(222, rand(1, 3));
    }).then(r => {
        console.log(r)
    }).then(() => {
        console.log('Exibe os dados na tela.')
    })
    .catch(e => {
        console.log(e);
    });

/* esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
}); */