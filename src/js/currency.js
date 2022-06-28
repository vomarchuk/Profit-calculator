import refs from './refs';
const { currency, currentCurrencyValue, currentActiveCurrency } = refs;

const currentCurrency = e => {
  if (e.target.nodeName !== 'BUTTON') return;

  currentActiveCurrency.classList.remove('currency__button--current');

  const nextCurrentActiveCurrency = e.target;
  nextCurrentActiveCurrency.classList.add('currency__button--current');
  const selectedCurrency = nextCurrentActiveCurrency.dataset.value;
  currentCurrencyValue.forEach(i => (i.textContent = selectedCurrency));

  const result = JSON.parse(localStorage.getItem('resultOnInvestment'));
  result.currency = selectedCurrency;
  localStorage.setItem('resultOnInvestment', JSON.stringify(result));
};

currency.addEventListener('click', currentCurrency);
