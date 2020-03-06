function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitASecond(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                return reject(new Error('Param is not string'));
            }
            resolve(msg.toUpperCase() + ' - I walked on the promise');

        }, time);
    });
}
/* 
waitASecond('Fase 1', rand())
    .then(r => {
        console.log(r)
        return waitASecond('Fase 2', rand());
    })
    .then(v => {
        console.log(v);
        return waitASecond('Fase 3', rand());
    })
    .then(resp => {
        console.log(resp);
        return resp;
    }).then(j => {
        console.log(`Ends here on stage ${j}`);
    })
    .catch(e => {
        console.log(e);
    }) */

async function executa() {
    try {
        const fase1 = await waitASecond('Fase 1', rand());
        console.log(fase1);

        const fase2 = await waitASecond('Fase 2', rand());
        console.log(fase2);

        const fase3 = await waitASecond('Fase 3', rand());
        console.log(fase3);

    } catch (error) {
        console.log(error);
    }

}

executa();