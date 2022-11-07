export default () => {
  document.querySelectorAll('[data-role="slider"]').forEach((slider) => {
    slider.addEventListener('click', (e) => {
      const sliderItem = e.target.closest('[data-role="slider-item"]');

      if (sliderItem) {
        const slider = sliderItem.closest('[data-role="slider"]');
        const current = slider.querySelector('[data-role="slider-current"]');
        const dataSrcItem = sliderItem.querySelector('[data-preview]');

        if (dataSrcItem) {
          const currentSrc = current.querySelector('[data-preview]');
          let src = dataSrcItem.dataset.preview;
          let preview = dataSrcItem.src;
          dataSrcItem.setAttribute('src', currentSrc.dataset.preview);
          dataSrcItem.setAttribute('data-preview', currentSrc.src);
          currentSrc.setAttribute('src', src);
          currentSrc.setAttribute('data-preview', preview);
          currentSrc.setAttribute('srcset', src);
          if (currentSrc.tagName === "VIDEO") currentSrc.poster = preview;
          let path = src.split('.');
          path[path.length - 1] = 'webp';
          current.querySelectorAll('source').forEach((source) => {
            source.setAttribute('srcset', path.join('.'));
          });
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
  })
}