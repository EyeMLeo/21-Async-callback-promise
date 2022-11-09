const timeEl = document.getElementById('time');

const int1 = setInterval(tick, 1000);
tick();
function tick() {
  const now = new Date();
  // timeEl.textContent = now.toLocaleTimeString();
  timeEl.textContent = now.toLocaleString('lt-LT', { timeStyle: 'medium' });
}
