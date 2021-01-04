function saludar( nombre ) {
    console.log( arguments );
    console.log('hola '+ nombre);
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


saludar('cristian', 29, true, 'Colombia');
// saludar2('cristian');
saludarFlecha();
saludarFlecha2('Cristian');