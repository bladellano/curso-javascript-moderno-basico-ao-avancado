// const mod1 = require('./mod1');
// const falaNome = require('./mod1').falaNome
const { nome, sobrenome, falaNome, Pessoa } = require('./mod1');
console.log(falaNome());

const path = require('path');
const axios = require('axios');

const p1 = new Pessoa('Luiz');
console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(resp => console.log(resp))
    .catch(e => console.log(e));