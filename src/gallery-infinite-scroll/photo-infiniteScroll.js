// INFINITE SCROLLING

import { refs } from './photosRefs';
import { UnsplashApi } from './UnsplashApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from './createGalleryCard';
import { spinnerStart, spinnerStop } from './spinner';

const unsplashApi = new UnsplashApi();
const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      unsplashApi.incrementPage();
      spinnerStart();
      unsplashApi
        .getPhotos()
        .then(({ results }) => {
          const markup = createGalleryCards(results);
          refs.list.insertAdjacentHTML('beforeend', markup);
          const hasMore = unsplashApi.hasMorePhotos();
          if (hasMore) {
            const item = document.querySelector('.gallery__item:last-child');
            observer.observe(item);
          }
        })
        .catch(err => {
          Notify.failure(err.message);
        })
        .finally(spinnerStop());
    }
  });
};
let observer = new IntersectionObserver(callback, options);
function handleSubmit(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.elements.query.value;
  if (!searchValue) {
    Notify.failure('Nothing');
    return;
  }
  unsplashApi.query = searchValue;
  unsplashApi.resetPage();
  event.currentTarget.reset();
  spinnerStart();
  unsplashApi
    .getPhotos()
    .then(({ results, total }) => {
      const markup = createGalleryCards(results);
      refs.list.innerHTML = markup;
      unsplashApi.setTotal(total);
      const hasMore = unsplashApi.hasMorePhotos();
      if (hasMore) {
        const item = document.querySelector('.gallery__item:last-child');
        observer.observe(item);
      }
    })
    .catch(err => {
      Notify.failure(err.message);
    })
    .finally(spinnerStop());
}
refs.form.addEventListener('submit', handleSubmit);
