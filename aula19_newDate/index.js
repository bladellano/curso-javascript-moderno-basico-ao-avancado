/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
*/
// const data = new Date(2019,0);

/*const data = new Date('2019-04-20 20:20:59');
console.log( 'Dia',data.getDate() );
console.log( 'Mês',data.getMonth() + 1 );
console.log( 'Ano',data.getFullYear() );
console.log( 'Hora',data.getHours() );
console.log( 'Min',data.getMinutes() );
console.log( 'Seg',data.getSeconds() );
console.log( 'ms',data.getMilliseconds() );
console.log( 'Dia semana',data.getDay() );
console.log(data.toString());
console.log(Date.now())//1573212840113 desde 1970 - milésimo de segundo.
*/

function zeroAESquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAESquerda(data.getDate());
    const mes = zeroAESquerda(data.getMonth());
    const ano = zeroAESquerda(data.getFullYear());
    const hora = zeroAESquerda(data.getHours());
    const min = zeroAESquerda(data.getMinutes());
    const seg = zeroAESquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}
const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
