import refs from '../refs';
const { interestRate, rate } = refs;
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

    default:
      percent = 0;
  }
  localStorage.setItem('interest rate', percent);
  interestRate.textContent = `${percent}%`;
};
export { getInterestRate };
