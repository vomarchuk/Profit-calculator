import refs from './refs';
const { amountInvestmentRange, amountInvestmentInput, currentInvestment } = refs;

const getAmountOfInvestment = e => {
  let value = 0;
  value = e.currentTarget.value;
  amountInvestmentInput.value = value;
  amountInvestmentRange.value = value;
  currentInvestment.textContent = value;
};

amountInvestmentRange.addEventListener('change', getAmountOfInvestment);
amountInvestmentInput.addEventListener('input', getAmountOfInvestment);
