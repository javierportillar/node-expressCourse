const names = require('./names-module');
const sayHi = require('./action');
console.log(names);
const {Pedro, Juan, Javi} = names;
sayHi(Juan);
sayHi(Pedro);
sayHi(Javi);
