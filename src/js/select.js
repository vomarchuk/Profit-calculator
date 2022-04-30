const refs = {
  select: document.querySelector('.type__select'),
  selectCurrent: document.querySelector('.select-current'),
  selectDrop: document.querySelector('.select-options'),
};

refs.select.addEventListener('click', e => {
  refs.selectDrop.classList.toggle('is-open');
  if (e.target.classList.value != 'select-item') return;
  refs.selectCurrent.textContent = e.target.textContent;
  console.log(refs.selectCurrent.textContent);
});
