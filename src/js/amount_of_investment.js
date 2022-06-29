import refs from './refs';
const { amountInvestmentRange, amountInvestmentInput, currentInvestment } = refs;

const getAmountOfInvestment = e => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

  let value;
  value = e.currentTarget.value;
  amountInvestmentInput.value = value;
  amountInvestmentRange.value = value;
  currentInvestment.textContent = value;

  resultOnInvestment.amountOfInvestment = value;

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
};

amountInvestmentRange.addEventListener('change', getAmountOfInvestment);
amountInvestmentInput.addEventListener('input', getAmountOfInvestment);
