import refs from './refs';
// import selectedCurrency from './currency';
// console.log(selectedCurrency);
const { amountInvestmentRange, amountInvestmentInput } = refs;
console.log(amountInvestmentRange, amountInvestmentInput);

console.log(amountInvestmentInput.value);

amountInvestmentInput.addEventListener('input', e => {
  console.log(e.currentTarget.value);
});

amountInvestmentRange.addEventListener('change', e => {
  console.log(e.currentTarget.value);
  e.currentTarget.value = 99;
});
