import refs from './refs';
const { currency, currentCurrencyValue } = refs;

const currentCurrency = e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const currentActiveCurrency = document.querySelector('.currency__button--current');
  currentActiveCurrency.classList.remove('currency__button--current');

  const nextCurrentActiveCurrency = e.target;
  nextCurrentActiveCurrency.classList.add('currency__button--current');
  const selectedCurrency = nextCurrentActiveCurrency.dataset.value;
  currentCurrencyValue.forEach(i => (i.textContent = selectedCurrency));
  return selectedCurrency;
};

currency.addEventListener('click', currentCurrency);
