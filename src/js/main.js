import refs from './refs';
import { TYPE_STANDARD, STANDARD_PERCENT } from './CONSTANTS';
const { selectCurrent } = refs;
const typeOfDeposit = localStorage.getItem('typeOfDeposit');
const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
if (resultOnInvestment === null)
  localStorage.setItem(
    'resultOnInvestment',
    JSON.stringify({
      typeOfDeposit: TYPE_STANDARD,
      interestRate: STANDARD_PERCENT,
    }),
  );

selectCurrent.textContent = typeOfDeposit;
