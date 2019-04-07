import moment from 'moment';
import { DAYS_OF_THE_WEEK } from '../models/alert';

const daysOfTheWeekToMomentDaysStringMap = {
  [DAYS_OF_THE_WEEK.SUNDAY]: 'Sunday',
  [DAYS_OF_THE_WEEK.MONDAY]: 'Monday',
  [DAYS_OF_THE_WEEK.TUESDAY]: 'Tuesday',
  [DAYS_OF_THE_WEEK.WEDNESDAY]: 'Wednesday',
  [DAYS_OF_THE_WEEK.THURSDAY]: 'Thursday',
  [DAYS_OF_THE_WEEK.FRIDAY]: 'Friday',
  [DAYS_OF_THE_WEEK.SATURDAY]: 'Saturday'
};

const daysOfTheWeekToMomentDaysNumberMap = {
  [DAYS_OF_THE_WEEK.SUNDAY]: 0,
  [DAYS_OF_THE_WEEK.MONDAY]: 1,
  [DAYS_OF_THE_WEEK.TUESDAY]: 2,
  [DAYS_OF_THE_WEEK.WEDNESDAY]: 3,
  [DAYS_OF_THE_WEEK.THURSDAY]: 4,
  [DAYS_OF_THE_WEEK.FRIDAY]: 5,
  [DAYS_OF_THE_WEEK.SATURDAY]: 6
};

export const daysUntilFriday = startDate =>
  moment(startDate)
    .day('Friday')
    .diff(moment(startDate), 'days');

const isInFuture = date => moment(date).diff(moment(), 'days') >= 0;
const isValidStart = date => moment(date).diff(moment(), 'days') > 1;

export const nextFriday = startDate => {
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

export const formatted = date =>
  moment(date, 'M/D/Y')
    .toDate()
    .toDateString();

export const fridaysInRange = (
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

export const generateDates = ({
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

export const generateLengthOfStay = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS' || isWeekendsOnly) return 2;
  return Math.ceil(moment(endDate).diff(moment(startDate), 'days'));
};

const getWeekendsFromFridays = fridays =>
  fridays.reduce((all, curr) => {
    return [...all, formatDates([curr, moment(curr).day('Saturday')])];
  }, []);

export const generateAllDates = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS') {
    return getWeekendsFromFridays(fridaysInRange());
  } else if (isWeekendsOnly) {
    return getWeekendsFromFridays(fridaysInRange(startDate, endDate));
  } else if (isValidStart(startDate)) {
    const allDates = [];
    let currentDate = moment(startDate);
    const end = moment(endDate);
    while (currentDate !== end) {
      console.log('currentDate', currentDate);
      console.log('end', end);
      allDates.push(currentDate);
      currentDate = currentDate.add(1, 'day');
    }
    return formatDates(allDates);
  }
};

/**
 * Generates all possible iterations of arrays of days that satisfy
 * the input parameters
 *
 * Example:
 *
 * input:
 * startDate: 1/1/2019 (Sunday)
 * endDate: 1/7/2019
 * daysOfTheWeek: M,T,W.TH,F
 * minNumNights: 2
 *
 * output: [
 *   ['Mon Jan 2 2019', 'Tues Jan 3 2019'],
 *   ['Tues Jan 3 2019', 'Weds Jan 4 2019'],
 *   ['Weds Jan 4 2019', 'Thurs Jan 5 2019'],
 *   ['Thurs Jan 5 2019', 'Fri Jan 6 2019'],
 * ]
 *
 */
export const generateDateArraysForDateRange = (
  daysOfTheWeekThatCanBeAddedToArray,
  minNumNights,
  startDate = moment().toDate(),
  endDate = moment()
    .add(6, 'months')
    .endOf('month')
    .toDate()
) => {
  // map DAYS_OF_THE_WEEK to moment day integers, e.g. ['SUNDAY', 'TUESDAY'] -> [0, 2]
  const daysOfTheWeekThatCanBeAddedToArrayInMomentNumbers = daysOfTheWeekThatCanBeAddedToArray.map(
    dayEnumValue => daysOfTheWeekToMomentDaysNumberMap[dayEnumValue]
  );
  const currentFirstDayForArrayOfDays = moment(startDate);
  const allIterationsOfDaySequences = [];
  const endDateAsMomentObj = moment(endDate);
  // subtract stay length since we don't want to stay past endDate
  endDateAsMomentObj.subtract(minNumNights, 'days');

  while (currentFirstDayForArrayOfDays.isSameOrBefore(endDateAsMomentObj)) {
    const currentArrayOfDays = [];
    let nightsLeftToFillWithADay = minNumNights;
    const currrentDayToAddToArray = moment(currentFirstDayForArrayOfDays);

    while (
      daysOfTheWeekThatCanBeAddedToArrayInMomentNumbers.includes(
        currrentDayToAddToArray.day()
      ) &&
      nightsLeftToFillWithADay > 0
    ) {
      currentArrayOfDays.push(formatted(currrentDayToAddToArray));
      nightsLeftToFillWithADay -= 1;
      currrentDayToAddToArray.add(1, 'day');
    }

    if (currentArrayOfDays.length === minNumNights) {
      allIterationsOfDaySequences.push(currentArrayOfDays);
    }
    currentFirstDayForArrayOfDays.add(1, 'day');
  }

  return allIterationsOfDaySequences;
};

export const generateDateArrayForSpecificTrip = (startDate, endDate) => {
  const currDate = moment(startDate);
  const dateArray = [];

  while (currDate.isBefore(moment(endDate))) {
    dateArray.push(formatted(currDate));
    currDate.add(1, 'day');
  }

  return dateArray;
};
