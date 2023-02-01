const inputList = document.querySelectorAll('.controls input');
const updateValue = event => {
  const suffix = event.currentTarget.dataset.sizing || '';
  const { name, value } = event.currentTarget;

  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputList.forEach(input => {
  input.addEventListener('input', updateValue);
});
