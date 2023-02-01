const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

import { cities } from './cities.js';

const form = document.querySelector('.find-city__search-form');
const itemList = document.querySelector('.suggestions');

const startMessage = `<li>Filter for a city</li><li>or a state</li>`;
const errorMessage = `<li class="error">We found nothing</li>`;

form.addEventListener('input', onInputFormType);

function onInputFormType(e) {
  const cityToFind = e.target.value;

  if (!cityToFind) {
    itemList.innerHTML = startMessage;
    return;
  }
  const regExp = new RegExp(cityToFind, 'gi');
  // console.dir(regExp);
  // console.log(typeof regExp);
  const filteredCIty = cities.filter(el => el.city.match(regExp));
  // console.log(filteredCIty);
  if (filteredCIty.length === 0) {
    itemList.innerHTML = errorMessage;
    return;
  }

  itemList.innerHTML = createMarkUp(filteredCIty, regExp, cityToFind);
}

function createMarkUp(cities, regExp, cityToFind) {
  return cities
    .map(el => {
      const cityName = el.city.replace(
        regExp,
        `<span class="hl">${cityToFind}</span>`
      );

      return `<li>
    <span class="name">${cityName}</span>
    </li>`;
    })
    .join('');
}
