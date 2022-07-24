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

  investmentTerm: document.querySelector('.js__term-investment'),

  currentInvestment: document.querySelectorAll('.js__current-investment'),
  currentInvestmentProfit: document.querySelectorAll('.js__current-investmentProfit'),
  currentInvestmentPercents: document.querySelector('.js__current-InvestmentPercents'),

  rate: document.querySelector('.js__rate'),
  interestRate: document.querySelector('.js__interest-rate'),

  columnInvested: document.querySelectorAll('.js__column-invested'),
  columnEarn: document.querySelector('.js__column-earn'),
};
export default refs;
