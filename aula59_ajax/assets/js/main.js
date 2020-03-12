const ajax = obj => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(hr.statusText)
            }
        });

    });

}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');

    ajax({
        method: 'GET',
        url: href
    }).then(resp => {
        carregaResultado(resp);
    }).catch(error => console.log(error));
}

function carregaResultado(resp) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resp;
}