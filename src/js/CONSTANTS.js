const TYPE_STANDARD = 'Standard';
const TYPE_PREMIUM = 'Premium';
const TYPE_VIP = 'VIP';

const STANDARD_PERCENT = 0.25;
const PREMIUM_PERCENT = 0.5;
const VIP_PERCENT = 0.75;

const DEFAULT = {
  typeOfDeposit: TYPE_STANDARD,
  interestRate: STANDARD_PERCENT,
  currency: 'PLN',
  amountOfInvestment: 1000,
  investmentTerm: 1,
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
