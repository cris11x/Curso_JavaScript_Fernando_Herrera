class Persona {

    //metodos estaticos
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + 'Instancias';
    }

    static mensaje() {
        // console.log( this.nombre );
        console.log('hola a todos soy un metodo estatico');
    }
 
    //propiedades y metodos estaticos
    nombre  = "";
    codigo  = "";
    frase   = "";
    comida  = "";

    //constructor
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre  = nombre;
        this.codigo  = codigo;
        this.frase   = frase;

        Persona._conteo++;
    }

    //sets y gets
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    //metodos
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

const spiderman = new Persona( 'peter parker', 'Spider', 'Soy tu amigable vecino spiderman' ),
      ironman   = new Persona( 'Tony Stark', 'Ironman', 'yo soy ironman' );
// console.log( ironman);

// spiderman.quienSoy();
spiderman.miFrase();
      
spiderman.setComidaFavorita = 'El pie de cereza de la tia may';
// console.log(spiderman.getComidaFavorita);
// console.log( spiderman );
// Persona._conteo = 2;
console.log(`conteo estatico: ${ Persona._conteo }`);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadexterna = 'Hola Mundo';

console.log(Persona.propiedadexterna);