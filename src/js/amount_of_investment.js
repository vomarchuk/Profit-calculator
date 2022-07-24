import refs from './refs';
import { getTotalProfit } from './helpers/getTotalProfit';
import { changeColumn } from './helpers/changeColumn';
const { amountInvestmentRange, amountInvestmentInput, currentInvestment, currentInvestmentProfit } =
  refs;

const getAmountOfInvestment = e => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  let value;
  value = e.currentTarget.value;
  amountInvestmentInput.value = value;
  amountInvestmentRange.value = value;

  currentInvestment.forEach(item => {
    item.textContent = value;
  });

  resultOnInvestment.amountOfInvestment = +value;

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
  getTotalProfit(resultOnInvestment);
  changeColumn();
};

amountInvestmentRange.addEventListener('change', getAmountOfInvestment);
amountInvestmentInput.addEventListener('input', getAmountOfInvestment);
