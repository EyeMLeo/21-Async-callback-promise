'use strict';
console.log('callback.js');

function getPost1(callBackFunc) {
  setTimeout(() => {
    console.log('post1');
    // cia as noriu kviesti post2
    callBackFunc();
  }, 3000);
}
function getPost2() {
  setTimeout(() => {
    console.log('post2');
  }, 2000);
}
function getPost3() {
  setTimeout(() => {
    console.log('post3');
  }, 1800);
}

getPost1(getPost2);
// getPost2();
// getPost3();

// kada call back gali buti naudojamas
function makeNum(cb) {
  const rez = cb(5);
  return rez;
}

function double(num) {
  return num * 2;
}
const n1 = makeNum(double);
// double(n1);
