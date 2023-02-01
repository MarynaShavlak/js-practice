// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api-axios.js';
import { createGalleryCards } from './gallery-cards-axios';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const onSearchFormSubmit = event => {
  event.preventDefault();

  unsplashApi.query = event.target.elements.user_search_query.value.trim();
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(res => {
      const { data } = res;
      console.log(res);
      if (data.results.length === 0) {
        alert('За вашим запитом зображень не знайдено!');

        event.target.reset();

        galleryListEl.innerHTML = '';

        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      if (data.total_pages > 1) {
        loadMoreBtnEl.classList.remove('is-hidden');
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(res => {
      const { data } = res;
      const { results } = data;

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(results)
      );

      if (unsplashApi.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
