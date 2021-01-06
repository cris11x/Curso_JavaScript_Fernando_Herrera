const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaTrue() );

console.warn('and') // si todos los valores son verdaderos
console.log( true && true); //true
console.log( true && !false); //true


console.log( '===========');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.warn('OR');

console.log( true || false);
console.log( regresaTrue() || regresaFalse() );

console.warn('Asignaciones');

const soyUndefined   = undefined;
const soyNull        = null;
const soyFalso       = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso' || true;

console.log({a1,a2,a3,a4,a5});

if( regresaFalse() && regresaTrue() && true || false || true )
{
    console.log('hacer algo');
} else {
    console.log('hacer otra cosa');
}

