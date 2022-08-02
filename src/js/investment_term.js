import refs from './refs';
import { getTotalProfit } from './helpers/getTotalProfit';
import { changeColumn } from './helpers/changeColumn';
import { changeActiveTickMark } from './helpers/changeActiveTickMark';
const { investmentTerm, tickMarksItem } = refs;

const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

changeActiveTickMark(tickMarksItem, resultOnInvestment.investmentTerm);

const getInvestmentTerm = e => {
  const result = +e.target.value;
  resultOnInvestment.investmentTerm = result;

  const tickMarksItemIsActive = document.querySelector('.tickmarks__item--isActive');

  tickMarksItemIsActive.classList.remove('tickmarks__item--isActive');
  changeActiveTickMark(tickMarksItem, resultOnInvestment.investmentTerm);

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
  getTotalProfit(resultOnInvestment);
  changeColumn();
};

investmentTerm.addEventListener('change', getInvestmentTerm);
