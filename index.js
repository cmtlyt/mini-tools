const posList = ['dong', 'nan', 'xi', 'bei'];
const posListBak = [...posList];

let clickCount = 0;

document.querySelectorAll('input[type=checkbox]').forEach((dom) => {
  dom.addEventListener('change', function () {
    const idx = +this.value;
    if (this.checked) {
      const pos = posListBak[idx];
      posList.splice(posList.indexOf(pos), 1);
    } else {
      const pos = posListBak[idx];
      const iIdx = posListBak.indexOf(pos);
      posList.splice(iIdx, 0, pos);
      posList.sort((a, b) => posListBak.indexOf(a) - posListBak.indexOf(b));
    }
  });
});

let timer = null;

document.querySelectorAll('.pos').forEach((dom) => {
  dom.addEventListener('click', function () {
    if (clickCount === 2) return;
    clearTimeout(timer);
    const pos = this.className.replace(/pos|active/g, '').trim();
    if (!posList.includes(pos)) {
      const bak = document.querySelector('.number').textContent;
      document.querySelector('.number').textContent = '禁用';
      timer = setTimeout(() => {
        document.querySelector('.number').textContent = bak;
      }, 1000);
      return;
    }
    document.querySelectorAll('.pos').forEach((item) => {
      item.classList.remove('active');
    });
    const randomNum = Math.floor(Math.random() * (6 * document.querySelector('input').value)) + 1;
    document.querySelector('.number').textContent = randomNum;
    const idx = posList.indexOf(pos);
    document.querySelector(`.${posList[(idx + randomNum - 1) % posList.length]}`).classList.add('active');
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
