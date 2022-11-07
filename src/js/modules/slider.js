export default () => {
  const sliders = document.querySelectorAll('[data-role="slider"]');

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('click', (e) => {
      const sliderItem = e.target.closest('[data-role="slider-item"]');

      if (sliderItem) {
        const slider = sliderItem.closest('[data-role="slider"]');
        const current = slider.querySelector('[data-role="slider-current"]');
        const list = slider.querySelector('[data-role="slider-list"]');

        if (sliderItem.hasAttribute('src')) {
          let src = sliderItem.src;
          sliderItem.setAttribute('src', current.src);
          current.setAttribute('src', src);
        } else {
          const newItem = document.createElement('div');
          newItem.classList.add('slider__item');
          newItem.dataset.role = 'slider-item';
          for (let j = 0; j < current.children.length; j++) {
            newItem.appendChild(current.children[j]);
          }
          list.appendChild(newItem);

          for (let j = 0; j < sliderItem.children.length; j++) {
            current.appendChild(sliderItem.children[j]);
          }

          sliderItem.remove();
        }
      }
    });
  }
}