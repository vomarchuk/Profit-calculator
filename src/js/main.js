import refs from './refs';

const { selectCurrent, amountInvestmentRange, amountInvestmentInput, currentInvestment } = refs;
const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

selectCurrent.textContent = resultOnInvestment.typeOfDeposit;

currentInvestment.textContent = resultOnInvestment.amountOfInvestment;
amountInvestmentInput.value = resultOnInvestment.amountOfInvestment;
amountInvestmentRange.value = resultOnInvestment.amountOfInvestment;
