// CommonJS, every file is module (by default)
// Modules - Encapsulamented Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi('Man');
sayHi(names.jay);
sayHi(names.pablo);

