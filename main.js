'use strict'

const menu_item = document.querySelector('.menu__item');
const place = document.querySelector('#place');

menu_item.addEventListener('click', () => {
  place.scrollIntoView({behavior: 'smooth'});
})
