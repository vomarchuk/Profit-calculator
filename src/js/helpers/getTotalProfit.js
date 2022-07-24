import refs from '../refs';
const { currentInvestmentProfit, currentInvestmentPercents } = refs;

const getTotalProfit = value => {
  const { amountOfInvestment, interestRate, investmentTerm } = value;
  const result = JSON.parse(localStorage.getItem('resultOnInvestment'));

  let totalProfit = amountOfInvestment;

  for (let i = 0; i < investmentTerm; i++) {
    totalProfit += totalProfit * (interestRate / 100);
  }
  let profit = Math.round(totalProfit) - amountOfInvestment;
  let totalPercents = +((profit / amountOfInvestment) * 100).toFixed(2);

  result.profit = Math.round(profit);
  result.totalProfit = Math.round(totalProfit);
  result.totalPercents = totalPercents;

  currentInvestmentProfit.forEach(i => (i.textContent = profit));
  currentInvestmentPercents.textContent = totalPercents;

  localStorage.setItem('resultOnInvestment', JSON.stringify(result));
};

export { getTotalProfit };
