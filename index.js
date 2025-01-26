const posList = ['dong', 'nan', 'xi', 'bei'];

let clickCount = 0;

document.querySelectorAll('.pos').forEach((dom) => {
  dom.addEventListener('click', function () {
    if (clickCount === 2) return;
    document.querySelectorAll('.pos').forEach((item) => {
      item.classList.remove('active');
    });
    const randomNum = Math.floor(Math.random() * (6 * document.querySelector('input').value)) + 1;
    document.querySelector('.number').textContent = randomNum;
    const pos = this.className.replace('pos', '').trim();
    const idx = posList.indexOf(pos);
    document.querySelector(`.${posList[(idx + randomNum) % 4]}`).classList.add('active');
    clickCount += 1;
    if (clickCount === 2) document.querySelector('.number').classList.add('lock');
  });
});

document.querySelector('button').addEventListener('click', () => {
  clickCount = 0;
  document.querySelector('.number').textContent = '';
  document.querySelector('.number').classList.remove('lock');
  document.querySelectorAll('.pos').forEach((item) => {
    item.classList.remove('active');
  });
});
