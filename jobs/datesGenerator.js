const moment = require('moment');

const daysUntilFriday = startDate =>
  moment(startDate)
    .day('Friday')
    .diff(moment(startDate), 'days');

const isInFuture = date => moment(date).diff(moment(), 'days') >= 0;
const isValidStart = date => moment(date).diff(moment(), 'days') > 1;

exports.daysUntilFriday = daysUntilFriday;

const nextFriday = startDate => {
  let start = startDate;
  if (!isInFuture(start)) {
    start = moment();
  }
  return daysUntilFriday(start) < 0
    ? moment(start)
        .day('Friday')
        .add(7, 'days')
    : moment(start).day('Friday');
};

exports.nextFriday = nextFriday;

const formatted = date => moment(date, 'M/D/Y').format('M-D-YYYY');

exports.formatted = formatted;

const arrOfDateEveryThirtyDaysBetween = (startDate, endDate) => {
  const datesArr = [];
  const date = moment(startDate);

  while (date < moment(endDate)) {
    datesArr.push(formatted(date));
    date.add(30, 'days');
  }

  return datesArr;
};

exports.arrOfDateEveryThirtyDaysBetween = arrOfDateEveryThirtyDaysBetween;

const fridaysInRange = (
  startDate = moment(),
  endDate = moment()
    .add(6, 'months')
    .endOf('month')
) => {
  const fridays = [];
  const date = nextFriday(startDate);
  while (date < moment(endDate)) {
    fridays.push(moment(date));
    date.add(7, 'days');
  }
  return fridays;
};

const formatDates = dates => dates.map(formatted);

exports.fridaysInRange = fridaysInRange;

exports.generateDates = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS') return formatDates(fridaysInRange());

  if (isWeekendsOnly) {
    return formatDates(fridaysInRange(startDate, endDate));
  } else if (isValidStart(startDate)) {
    return [formatted(moment(startDate))];
  }
  return [];
};

exports.generateLengthOfStay = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS' || isWeekendsOnly) return 2;
  return Math.ceil(moment(endDate).diff(moment(startDate), 'days'));
};

const getWeekendsFromFridays = fridays =>
  fridays.reduce(
    (all, curr) => [...all, formatDates([curr, moment(curr).day('Saturday')])],
    []
  );

exports.generateAllDates = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS') {
    const weekendsDates = getWeekendsFromFridays(fridaysInRange());
    console.log('weekendsDates', weekendsDates);
    return weekendsDates;
  } else if (isWeekendsOnly) {
    return getWeekendsFromFridays(fridaysInRange(startDate, endDate));
  } else if (isValidStart(startDate)) {
    let currentDate = moment(startDate);
    const end = moment(endDate);
    const startEnd = [formatDates([currentDate, end])];
    console.log('startEnd', startEnd);
    return startEnd;
  }
};
