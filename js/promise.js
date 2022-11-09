'use strict';
console.log('promise.js');

// promise anatomy
function pr1() {
  return new Promise((resolve, reject) => {
    // kazkokia logika
    let noError = true;

    if (noError) {
      // kai nera klaidu
      resolve('OK');
    } else {
      // kai yra klaidu
      reject('BAD BAD THING HAPPENED');
    }
  });
}
// const rez = pr1();
// console.log('rez ===', rez); // PROMMISE

// resolve('OK'); ==> .then(('OK') => {})
// vienas paciam gale
// reject('BAD ') ==> .catch((BAD) => {})
// pr1()
//   .then((ats) => console.log(ats))
//   .catch((err) => console.warn(err));

pr1()
  .then((ats) => {
    console.log(ats);
    return ats.toLowerCase();
  })
  .then((antrasThen) => console.log('antrasThen ===', antrasThen))
  .catch((err) => console.warn(err));
