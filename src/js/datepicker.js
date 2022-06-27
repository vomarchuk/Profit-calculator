import refs from './refs';
const { startDate, endDate } = refs;

import { getDateNow } from './helpers/getDateNow';

const date = new Date();

const dateNow = getDateNow(date);
startDate.min = dateNow;
startDate.value = dateNow;

endDate.min = dateNow;

$('.datepicker').datepicker();

const options = $('.datepicker').datepicker('options', 'disabled');

console.log(options);
