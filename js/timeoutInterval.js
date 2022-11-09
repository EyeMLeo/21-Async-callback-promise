'use strict';
console.log('callback.js');

const btn1El = document.getElementById('btn1');
const timeEl = document.getElementById('time');

btn1El.addEventListener('click', () => {
  console.log('Paspaudei');
  // ivygdo nurodyta funkcija po nurodyto laiko
  setTimeout(() => {
    console.log('Paspaudei timeout');
  }, 2000);
});

function sayHi() {
  console.log('Hello timeOut');
}

// ivygdo nurodyta funkcija po nurodyto laiko
setTimeout(sayHi, 3000);

// setInterval vygdo kazkoki koda kas kazkiek ms
const int1 = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  // timeEl.textContent = now.toLocaleTimeString();
  timeEl.textContent = now.toLocaleString('lt-LT', { timeStyle: 'medium' });
}
// tick();

// sutabdyti intervala su clearInterval
setTimeout(() => clearInterval(int1), 5000);
