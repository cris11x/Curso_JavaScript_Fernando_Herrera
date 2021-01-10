class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre = '') {

        if ( !!Singleton.instancia )
        {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
        console.log(Singleton.instancia);

        // return this;

    }


}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanter');

console.log(`Nombre en la instancia es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia es: ${ instancia3.nombre }`);