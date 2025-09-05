'use strict';

const ul = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
ul.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  document.querySelector('#largeImg').src = link.getAttribute('href');
});
