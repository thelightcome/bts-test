export default () => {
  const btns = document.querySelectorAll('button[data-role="btn"]');
  const tabs = document.querySelectorAll('div[data-role="tab"]');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('reviews__btn--active');
        tabs[i].classList.remove('tab--active');
      }
      btns[i].classList.add('reviews__btn--active');
      tabs[i].classList.add('tab--active');
    });
  }
}