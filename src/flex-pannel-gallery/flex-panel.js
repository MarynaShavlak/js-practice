const panelsList = document.querySelectorAll('.panel');

const toggleOpen = e => {
  const isOpen = document.querySelector('.open');
  e.currentTarget.classList.toggle('open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }
};

panelsList.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
});
