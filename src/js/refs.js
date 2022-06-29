const refs = {
  select: document.querySelector('.type__select'),
  selectCurrent: document.querySelector('.select-current'),
  selectDrop: document.querySelector('.select-options'),

  currency: document.querySelector('.currency'),
  currentCurrencyValue: document.querySelectorAll('.js__current-currency'),
  currentActiveCurrency: document.querySelector('.currency__button--current'),

  currencyBtn: document.querySelectorAll('.currency__button'),
  amountInvestmentRange: document.querySelector('.js__amount-range'),
  amountInvestmentInput: document.querySelector('.js__amount-input'),

  currentInvestment: document.querySelector('.js__current-investment'),
  rate: document.querySelector('.js__rate'),
  interestRate: document.querySelector('.js__interest-rate'),

  startDate: document.querySelector('.js__datepicker-start'),
  endDate: document.querySelector('.js__datepicker-end'),
};
export default refs;
