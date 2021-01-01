const bindings = require('bindings');
const helloAddon = bindings('hello');

console.log(helloAddon.hello());