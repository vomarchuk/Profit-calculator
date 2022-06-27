const refs = {
  select: document.querySelector('.type__select'),
  selectCurrent: document.querySelector('.select-current'),
  selectDrop: document.querySelector('.select-options'),

  currency: document.querySelector('.currency'),

  amountInvestmentRange: document.querySelector('.js__amount-range'),
  amountInvestmentInput: document.querySelector('.js__amount-input'),

  currentCurrencyValue: document.querySelectorAll('.js__current-currency'),
  currentInvestment: document.querySelector('.js__current-investment'),
  rate: document.querySelector('.js__rate'),
  interestRate: document.querySelector('.js__interest-rate'),

  startDate: document.querySelector('.js__datepicker-start'),
  endDate: document.querySelector('.js__datepicker-end'),
};
export default refs;
