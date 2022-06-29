import refs from './refs';
import changeTextContent from './helpers/changeTextContent';
const { currency, currentCurrencyValue, currencyBtn } = refs;

const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));

changeTextContent(currentCurrencyValue, resultOnInvestment.currency);

currencyBtn.forEach(i => {
  const current = resultOnInvestment.currency;
  if (current === i.dataset.value) {
    i.classList.add('currency__button--current');
  }
});

const currentCurrency = e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const currentActiveCurrency = document.querySelector('.currency__button--current');

  currentActiveCurrency.classList.remove('currency__button--current');

  const nextCurrentActiveCurrency = e.target;
  nextCurrentActiveCurrency.classList.add('currency__button--current');
  const selectedCurrency = nextCurrentActiveCurrency.dataset.value;
  const resultOnInvestment = JSON.parse(localStorage.getItem('resultOnInvestment'));
  resultOnInvestment.currency = selectedCurrency;
  localStorage.setItem('resultOnInvestment', JSON.stringify(resultOnInvestment));

  changeTextContent(currentCurrencyValue, resultOnInvestment.currency);
};

currency.addEventListener('click', currentCurrency);
