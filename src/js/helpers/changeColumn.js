import refs from '../refs';
const { columnInvested, columnEarn } = refs;

const changeColumn = () => {
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  const inv = resultOnInvestment.amountOfInvestment;
  const earn = resultOnInvestment.profit;
  const heightInvestedColumn = `${inv / 280 + 10}px`;
  const heightEarnColumn = `${earn / 280 + 10}px`;

  columnInvested.forEach(i => (i.style.height = heightInvestedColumn));
  columnEarn.style.height = heightEarnColumn;
};

export { changeColumn };
