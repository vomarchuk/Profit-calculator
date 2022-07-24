const TYPE_STANDARD = 'Standard';
const TYPE_PREMIUM = 'Premium';
const TYPE_VIP = 'VIP';

const STANDARD_PERCENT = 1.5;
const PREMIUM_PERCENT = 3;
const VIP_PERCENT = 5;

const DEFAULT = {
  typeOfDeposit: TYPE_STANDARD,
  interestRate: STANDARD_PERCENT,
  currency: 'PLN',
  amountOfInvestment: 10000,
  investmentTerm: 1,
  profit: 0,
  totalProfit: 0,
  totalPercents: 0,
};

export {
  TYPE_STANDARD,
  TYPE_PREMIUM,
  TYPE_VIP,
  STANDARD_PERCENT,
  PREMIUM_PERCENT,
  VIP_PERCENT,
  DEFAULT,
};
