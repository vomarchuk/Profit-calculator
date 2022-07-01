import refs from './refs';
const { investmentTerm } = refs;
const getInvestmentTerm = e => {
  const result = +e.target.value;

  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  resultOnInvestment.investmentTerm = result;

  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));
};

investmentTerm.addEventListener('change', getInvestmentTerm);
