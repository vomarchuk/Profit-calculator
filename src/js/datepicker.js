import refs from './refs';
const { startDate, endDate } = refs;

import { getDateNow } from './helpers/getDateNow';

const date = new Date();

const dateNow = getDateNow(date);
startDate.min = dateNow;
startDate.value = dateNow;

endDate.min = dateNow;

$('#datepicker-start').datepicker({
  dateFormat: 'yy-mm-dd',

  minDate: 'dateNow',
  firstDay: 1,
});

$('#datepicker-end').datepicker({
  dateFormat: 'yy-mm-dd',

  minDate: 'dateNow',
  firstDay: 1,
  maxDate: '+1m',
});
