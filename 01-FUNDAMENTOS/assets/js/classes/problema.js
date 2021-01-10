const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

// fher.imprimir();

// ok esto se debe de crear con la palabra new
function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria     = new Persona('Maria', 18),
      melissa   = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();


