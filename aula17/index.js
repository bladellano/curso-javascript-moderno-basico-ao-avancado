/*
&& -> false && true -> "o valor mesmo"
|| ->
Falsy:
false, 0, '', "",``,null, undefined, NaN
*/
// console.log('Luiz' && 'Oi' && 'Maria');
function falaOi(){
    return 'Oi';
}
const vaiExecutar = 'Joao';
// const vaiExecutar = 'Joao';
console.log(vaiExecutar && falaOi());

console.log(0||false||null||'Luiz Otavio'||true);

const corUsuario = '';
// const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';//String, true
const d = false;
const e = NaN;

console.log(a||b||c||d||d||e);
