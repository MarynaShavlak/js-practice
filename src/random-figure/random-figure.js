const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];

const container = document.querySelector('.random-container');
const formEl = document.createElement('div');

onformElClick();

container.append(formEl);

formEl.addEventListener('click', onformElClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

function onformElClick() {
  formEl.style.cssText = forms[randomither(forms.length)];
  formEl.style.background = getRandomHexColor();
  const height =
    100 - (formEl.clientHeight * 100) / document.documentElement.clientHeight;
  const width =
    100 - (formEl.clientWidth * 100) / document.documentElement.clientWidth;
  formEl.style.position = 'absolute';
  formEl.style.top = `${randomither(height)}%`;
  formEl.style.left = `${randomither(width)}%`;
}
