//Teoría de conjuntos SET
const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
console.log(set);
set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
console.log(set);
set.add(77); // not added because 77 is strictly equal to 77
console.log(set.size);

set.add(functionallyIdenticalObject)// not added because functionallyIdenticalObject is strictly equal to functionallyIdenticalObject
console.log(set);

    