import refs from './refs';
const { amountInvestmentRange, amountInvestmentInput, currentInvestment } = refs;

const getAmountOfInvestment = e => {
  let value = 0;
  value = e.currentTarget.value;
  amountInvestmentInput.value = value;
  amountInvestmentRange.value = value;
  currentInvestment.textContent = value;

  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  resultOnInvestment.amountOfInvestment = value;

  localStorage.setItem('amount of investment', value);
  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
};

amountInvestmentRange.addEventListener('change', getAmountOfInvestment);
amountInvestmentInput.addEventListener('input', getAmountOfInvestment);
