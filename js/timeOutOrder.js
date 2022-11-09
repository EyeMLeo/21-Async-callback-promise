'use strict';
console.log('timeOutOrder.js');

console.log('One');

function sayHi() {
  console.log('Two');
}
// asihronine operacija visada vyks po to kai visas kodas nuskaitytas
setTimeout(sayHi, 0);

console.log('Three');
