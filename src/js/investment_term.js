import refs from './refs';
import { getTotalProfit } from './helpers/getTotalProfit';
import { changeColumn } from './helpers/changeColumn';

const { investmentTerm } = refs;

const getInvestmentTerm = e => {
  const result = +e.target.value;

  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  resultOnInvestment.investmentTerm = result;

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
  getTotalProfit(resultOnInvestment);
  changeColumn();
};

investmentTerm.addEventListener('change', getInvestmentTerm);
