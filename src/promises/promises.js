import { Notify } from 'notiflix';

const frameworks = ['React', 'Vue', 'Angular'];
const raceBtn = document.querySelector('.race-btn');
const allBtn = document.querySelector('.all-btn');
const allSettledBtn = document.querySelector('.allSettled-btn');
const anyBtn = document.querySelector('.any-btn');

const getRandomDelay = () => Math.ceil(Math.random() * 2000);

function makePromise(framework) {
  return new Promise((resolve, reject) => {
    const DELAY = getRandomDelay();
    setTimeout(() => {
      if (DELAY < 1500) {
        resolve({ framework, delay: DELAY });
      } else {
        reject({ framework, delay: DELAY, error: 'Promise error' });
      }
    }, DELAY);
  });
}

function onSuccess({ framework, delay }) {
  Notify.success(`✅ ${framework} won with ${delay} ms`);
}
function onError({ framework, delay, error }) {
  Notify.failure(`❌ ${error}! ${framework} rejected in ${delay} ms`);
}

raceBtn.addEventListener('click', onRaceBtnClick);
allBtn.addEventListener('click', onAllBtnClick);
allSettledBtn.addEventListener('click', onAllSettledBtnClick);
anyBtn.addEventListener('click', onAnyBtnClick);

function onRaceBtnClick() {
  const promises = frameworks.map(makePromise);
  Promise.race(promises).then(onSuccess).catch(onError);
}

function onAllBtnClick() {
  const promises = frameworks.map(makePromise);
  Promise.all(promises)
    .then(res => res.forEach(onSuccess))
    .catch(onError);
}

function onAllSettledBtnClick() {
  const promises = frameworks.map(makePromise);
  Promise.allSettled(promises).then(res =>
    res.forEach(({ status, reason, value }) => {
      if (status === 'fulfilled') {
        onSuccess(value);
      } else {
        onError(reason);
      }
    })
  );
}

function onAnyBtnClick() {
  const promises = frameworks.map(makePromise);
  Promise.any(promises)
    .then(onSuccess)
    .catch(({ errors }) => {
      errors.forEach(onError);
    })
    .catch(({ errors, message, stack }) => console.dir(errors, message, stack));
}
