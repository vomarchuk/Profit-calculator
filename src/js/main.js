import refs from './refs';
import { changeColumn } from './helpers/changeColumn';

const {
  selectCurrent,
  amountInvestmentRange,
  amountInvestmentInput,
  currentInvestment,
  currentInvestmentProfit,
  investmentTerm,
} = refs;
const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

selectCurrent.textContent = resultOnInvestment.typeOfDeposit;
currentInvestment.forEach(item => (item.textContent = resultOnInvestment.amountOfInvestment));
currentInvestmentProfit.textContent = resultOnInvestment.profit;

amountInvestmentInput.value = resultOnInvestment.amountOfInvestment;
amountInvestmentRange.value = resultOnInvestment.amountOfInvestment;
investmentTerm.value = resultOnInvestment.investmentTerm;

changeColumn();

const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

  console.log(resultOnInvestment);
});
