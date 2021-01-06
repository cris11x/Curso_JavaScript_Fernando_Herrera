function saludar( nombre ) {
    // console.log( arguments );
    // console.log('hola '+ nombre);
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un color de codigo que esta despues');
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
} //funcion anonima

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('cristian', 29, true, 'Colombia'); //1
// saludar2('cristian');
// saludarFlecha();
// saludarFlecha2('Cristian');

function sumar( a, b ) {
    return a + b;
}

// const sumar2 = (a,b) => 
// {
//     return a + b;
// }

const sumar2 = (a,b) =>  a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );