import refs from './refs';
import { getInterestRate } from './helpers/getInterestRate';

const { select, selectDrop, selectCurrent } = refs;

const getTypeOfDeposit = e => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  selectDrop.classList.toggle('is-open');
  if (e.target.classList.value != 'select-item') return;
  const result = e.target.textContent;
  selectCurrent.textContent = result;

  resultOnInvestment.typeOfDeposit = result;
  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));

  getInterestRate(result);
};

const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

// selectCurrent.textContent = resultOnInvestment.typeOfDeposit;

getInterestRate(selectCurrent.textContent);

select.addEventListener('click', getTypeOfDeposit);
