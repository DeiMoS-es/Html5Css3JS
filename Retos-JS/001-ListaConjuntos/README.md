# crear nuevo documento con quoka Ctrl + Shift + P
# Ejercicio 1
## Lista de reproducción de Ozan
En JavaScript, un <strong>conjunto</strong> es una estructura similar a una lista que contiene valores únicos. A diferencia de una matriz, no se puede acceder a los elementos mediante un índice.
## Ejemplo:
const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
//=> 3

set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
//=> 4

set.add(77); // not added because 77 is strictly equal to 77
console.log(set.size);
//=> 4

set.add(functionallyIdenticalObject)// not added because functionallyIdenticalObject is strictly equal to functionallyIdenticalObject

## Instrucciones:
Ozan está preparando una lista de reproducción para un próximo viaje por carretera. No quiere escuchar la misma pista más de una vez, pero la lista de reproducción se ha vuelto tan larga que le cuesta recordar qué pistas ya se han agregado.

La API para el reproductor de música de Ozan solo sabe cómo trabajar con matrices, por lo que intenta escribir algún código que Array.indexOf()verifique la presencia de una pista antes de agregarla a la lista de reproducción. Desafortunadamente, su programa tarda demasiado en ejecutarse. ¡Necesita tu ayuda!

Al acudir en ayuda de Ozan, te sorprende descubrir que su lista de reproducción contiene medio millón de pistas. ¿Quizás conoces una estructura de datos diferente que te permitirá manipular la lista de reproducción de manera más eficiente?

### 1. Eliminar pistas duplicadas
Implemente la removeDuplicatesfunción, que toma una lista de reproducción como parámetro y devuelve una nueva lista de reproducción donde todas las pistas son únicas.
const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell',
];

removeDuplicates(playlist);
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']
### 2. Compruebe si ya se ha agregado una pista.
Implemente la hasTrackfunción, que toma una lista de reproducción y una pista como parámetros y devuelve un booleano que indica si la lista de reproducción contiene la pista.

const playlist = [
  'The Fashion Show - Grace Jones',
  'Dr. Funkenstein - Parliament',
];

hasTrack(playlist, 'Dr. Funkenstein - Parliament');
//=> true

hasTrack(playlist, 'Walking in the Rain - Grace Jones');
//=> false
### 3. Añade una pista
Implemente la addTrackfunción, que toma una lista de reproducción y una pista como parámetros y devuelve una nueva lista de reproducción que incluye la pista.

const playlist = ['Selma - Bijelo Dugme'];

addTrack(playlist, 'Atomic Dog - George Clinton');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

addTrack(playlist, 'Selma - Bijelo Dugme');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']