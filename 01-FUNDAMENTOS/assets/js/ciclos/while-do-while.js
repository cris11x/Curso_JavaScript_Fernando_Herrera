console.warn('While');
const carros = ['ford', 'mazda', 'Honda', 'Toyota'];


let i = 0;
// while( i < carros.length )
// {
//     console.log( carros[i ]);
//     i++;
// }

while( carros[i] )
{
    if( i === 1 ){
        i++;
        // break;
        continue;
    }
    console.log( carros[i ]);
    i++;
}

console.warn('Do While');

let j = 0;
do {
    console.log( carros[j]);
    j++;

} while( carros[j] );
