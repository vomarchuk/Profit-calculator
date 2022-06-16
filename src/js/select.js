import refs from './refs';

const getTypeOfDeposit = e => {
  refs.selectDrop.classList.toggle('is-open');
  if (e.target.classList.value != 'select-item') return;
  const result = e.target.textContent;
  refs.selectCurrent.textContent = result;
};

refs.select.addEventListener('click', getTypeOfDeposit);
