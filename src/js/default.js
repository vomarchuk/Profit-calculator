import { DEFAULT } from './CONSTANTS';

const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
if (resultOnInvestment === null) {
  localStorage.setItem('resultOnInvestment', JSON.stringify(DEFAULT));

  return;
}
