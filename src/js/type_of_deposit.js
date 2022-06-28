import refs from './refs';
const { select, selectDrop, selectCurrent } = refs;

import { getInterestRate } from './helpers/getInterestRate';
const getTypeOfDeposit = e => {
  selectDrop.classList.toggle('is-open');
  if (e.target.classList.value != 'select-item') return;
  const result = e.target.textContent;
  selectCurrent.textContent = result;
  getInterestRate(result);

  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  resultOnInvestment.typeOfDeposit = result;

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
};

getInterestRate(selectCurrent.textContent);

select.addEventListener('click', getTypeOfDeposit);
