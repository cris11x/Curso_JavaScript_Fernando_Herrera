// Dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9


// entra a un sitio web, para consultar si esta abierto hoy....

const dia = 6; // domingo... lunues ...
const horaActual = 11;

let horaApertura;
let mensaje; // esta abiero o esta cerrado hoy abrimos a las XX

// if ( dia === 0 || dia ===6 ){
// if ( [0,6].includes( dia ) ){
//     console.log( 'Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta Abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaActual }`;
// }

mensaje = ( horaActual >= horaApertura ) ? `Esta Abierto` : `Esta cerrado, hoy abrimos a las ${ horaActual }`;

console.log( horaApertura, mensaje );