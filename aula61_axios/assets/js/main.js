axios('pessoas.json')
    .then(r => loadElementsPage(r.data));

function loadElementsPage(json) {

    const table = document.createElement('table');

    for (let pessoa of json) {

        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.email;
        tr.appendChild(td);

        // td = document.createElement('td');
        // td.innerHTML = pessoa.idade;
        // tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}