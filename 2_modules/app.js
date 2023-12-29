const names = require('./names-module');
const sayHi = require('./action');
const data = require('./alternative');

console.log(names);
console.log(data);

const {Pedro, Juan, Javi} = names;
sayHi(Juan);
sayHi(Pedro);
sayHi(Javi);
