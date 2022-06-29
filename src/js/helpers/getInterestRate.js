import refs from '../refs';
const { interestRate } = refs;
import {
  TYPE_STANDARD,
  TYPE_PREMIUM,
  TYPE_VIP,
  STANDARD_PERCENT,
  PREMIUM_PERCENT,
  VIP_PERCENT,
} from '../CONSTANTS';

const getInterestRate = type => {
  let percent;

  switch (type) {
    case TYPE_STANDARD:
      percent = STANDARD_PERCENT;
      break;
    case TYPE_PREMIUM:
      percent = PREMIUM_PERCENT;
      break;
    case TYPE_VIP:
      percent = VIP_PERCENT;
      break;
  }

  const result = JSON.parse(localStorage.getItem('resultOnInvestment'));
  result.interestRate = percent;
  localStorage.setItem('resultOnInvestment', JSON.stringify(result));

  interestRate.textContent = `${result.interestRate}%`;
};
export { getInterestRate };
