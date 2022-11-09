'use strict';
console.log('callback.js');

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post1');
      // cia as noriu kviesti post2
      resolve(10);
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post2');

      resolve(20);
    }, 2000);
  });
}

function getPost3() {
  return new Promise((resolve, reject) => {
    // throw new Error('klaida rasant'); // bus pagauta catch
    setTimeout(() => {
      console.log('post3');
      resolve(15);
    }, 1800);
  });
}

// callback way
// getPost1(getPost2);
// getPost2();
// getPost3();

// promise Way
// getPost1()
//   .then(() => getPost2())
//   .then(() => getPost3())
//   .catch((err) => console.warn('klaida kazkur get post', err));

// Promise.All([pr1, pr2 ...]) - budaas kazka dartyti kai grys visi promses

// kiekvienas postas grazina reiksme, mums reikia paskaiciuti reiksmiu vidurki kai turesim visas reiksmes
Promise.all([getPost1(), getPost2(), getPost3(), Promise.resolve(50)])
  .then((values) => {
    console.log('values ===', values);
    const postValuesAvg = values.reduce((total, sk) => total + sk, 0) / values.length;
    console.log('postValuesAvg ===', postValuesAvg);
  })
  .catch(console.warn);
