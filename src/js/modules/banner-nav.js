export default () => {
  const wrapper = document.querySelector('.banner-nav__menu');
  const contentWrapper = document.querySelector('.banner-nav__content');
  const tild = document.querySelector('.banner-nav__tild');

  let activeElem = null;

  wrapper.addEventListener('click', (e) => {
    const itemBtn = e.target.closest('.banner-nav__item');

    if (itemBtn) {
      if (activeElem) {
        activeElem.classList.remove('banner-nav__item--active');
        document.querySelector('.banner-nav__body[data-id="' + activeElem.dataset.target + '"]').classList.remove('banner-nav__body--active');
      }

      if (activeElem !== itemBtn) {
        itemBtn.classList.add('banner-nav__item--active')
        contentWrapper.classList.add('banner-nav__content--active');
        document.querySelector('.banner-nav__body[data-id="' + itemBtn.dataset.target + '"]').classList.add('banner-nav__body--active');

        const wrapperStyle = wrapper.getBoundingClientRect();
        const itemBtnStyle = itemBtn.getBoundingClientRect();
        const contentWrapperStyle = contentWrapper.getBoundingClientRect();

        contentWrapper.style.top = itemBtnStyle.top - wrapperStyle.top + 30 + 'px';

        tild.style.left = itemBtnStyle.left - contentWrapperStyle.left + itemBtnStyle.width / 2 - 10 + 'px';

        activeElem = itemBtn;
      } else {
        activeElem = null;
        contentWrapper.classList.remove('banner-nav__content--active');
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.banner-nav')) {
      if (activeElem) {
        activeElem.classList.remove('banner-nav__item--active');
        activeElem = null;
        contentWrapper.classList.remove('banner-nav__content--active');
      }
    }
  })
};