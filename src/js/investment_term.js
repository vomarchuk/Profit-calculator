const termInvestment = document.querySelector('.js__term-investment');
const getTermInvestment = e => {
  const result = +e.target.value;
  return result;
};

termInvestment.addEventListener('change', getTermInvestment);
