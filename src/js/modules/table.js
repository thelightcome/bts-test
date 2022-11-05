export default (wrapperClass) => {
  let curTr = null;
  let curTd = null;

  const table = document.querySelector(wrapperClass);
  const trs = table.querySelectorAll('tr');
  const tds = [];

  for (let i = 0; i < trs.length; i += 1) {
    trs[i].dataset.key = i;
    tds[i] = trs[i].querySelectorAll('th, td');

    for (let j = 0; j < tds[i].length; j += 1) {
      tds[i][j].dataset.key = j;
    }
  }

  table.addEventListener('click', (e) => {
    const tr = e.target.closest('tr');
    const td = e.target.closest('td, th');

    if (tr) {
      let key = +tr.dataset.key;
      if (curTr !== null) trs[curTr].classList.remove('active');
      if (curTr === key) curTr = null;
      else {
        curTr = key;
        trs[key].classList.add('active');
      }
    }

    if (td) {
      let key = +td.dataset.key;
      if (curTd !== null) {
        tds.forEach((e) => {
          e[curTd].classList.remove('active');
        })
      }
      if (curTd === key) curTd = null;
      else {
        curTd = key;
        tds.forEach((e) => {
          e[key].classList.add('active');
        })
      }
    }
  });
}