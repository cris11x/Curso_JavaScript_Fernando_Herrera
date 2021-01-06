let a = 5;

if ( a >= 10 ) { // undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}



// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes....

console.log( {dia} );

if( dia === 1 ){
    console.log('Lunes');
} else if( dia === 1 ) {
    console.log('Martes');
    
    // if ( dia === 2 ) {
        //     console.log('Martes');
        // } else {
            //     console.log('No es lunes ni domingo');
            // }
} else if (dia === 2) {
     console.log('Martes');      
} else {    
    console.log('No es Lunes, martes o domingo ...');      
}

// Sin usar If Else, o switch, unicamente objetos
dia  = 6; // 0: Domingo, 1: Lunes, 2: Martes....


const diasLetras = {
    0: 'domingo', 
    1: 'lunes', 
    2: 'martes', 
    3: 'miercoles', 
    4: 'jueves', 
    5: 'viernes', 
    6: 'sabado'
}


const diasLetras2 = [ 'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ];

// dia de la semana
console.log( diasLetras[dia] || 'Dia no definido');

