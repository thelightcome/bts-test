export default () => {
  const wrapper = document.querySelector('.banner-nav__menu');
  const contentWrapper = document.querySelector('.banner-nav__content');
  const tild = document.querySelector('.banner-nav__tild');

  let activeElem = null;

  wrapper.addEventListener('click', (e) => {
    const itemBtn = e.target.closest('.banner-nav__item');
    const span = itemBtn.querySelector('span');

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
        const spanStyle = span.getBoundingClientRect();
        const contentWrapperStyle = contentWrapper.getBoundingClientRect();

        contentWrapper.style.top = spanStyle.top - wrapperStyle.top + spanStyle.height * 2.6 + 'px';

        let left = spanStyle.left - contentWrapperStyle.left + spanStyle.width / 2 - 10;

        left = left + 40 > contentWrapperStyle.width ? left - 34 : left;
        tild.style.left = left + 'px';

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