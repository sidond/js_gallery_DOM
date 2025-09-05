'use strict';

const items = document.querySelectorAll('.list-item__link');

items.forEach((item) => {
  // eslint-disable-next-line no-shadow
  item.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#largeImg').src = item.getAttribute('href');
  });
});
