import refs from './refs';

const {
  selectCurrent,
  amountInvestmentRange,
  amountInvestmentInput,
  currentInvestment,
  investmentTerm,
} = refs;
const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

selectCurrent.textContent = resultOnInvestment.typeOfDeposit;
currentInvestment.textContent = resultOnInvestment.amountOfInvestment;
amountInvestmentInput.value = resultOnInvestment.amountOfInvestment;
amountInvestmentRange.value = resultOnInvestment.amountOfInvestment;
investmentTerm.value = resultOnInvestment.investmentTerm;

const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

  console.log(resultOnInvestment);
});
