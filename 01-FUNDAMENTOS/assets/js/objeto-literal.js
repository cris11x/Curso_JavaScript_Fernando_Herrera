let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -188.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbister'],
    direccion : {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California' 
    },
    'ultima-pelicula': 'Avengers Endgame',
};

// console.log(personaje['nombre']);
console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);
console.log('edad ', personaje.edad);
console.log('No. Trajes ', personaje.trajes.length);
console.log('Ultimo Traje ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo ', personaje[x]);
console.log('Ultima Pelicula ', personaje['ultima-pelicula']);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// personaje = true;
console.log( personaje );

Object.freeze( personaje ); // permite bloquear el cambio de propiedades de ese objeto

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log('hola');
console.log( personaje );


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades );
console.log( valores );

