import moment from 'moment';
import { DAYS_OF_THE_WEEK, ALERT_TYPES } from '../models/alert';

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
export const generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange = (
  daysOfTheWeekThatCanBeAddedToArray,
  minNumNights,
  startDate,
  endDate
) => {
  const startDateOrDefault = startDate || moment().toDate();
  const endDateOrDefault =
    endDate ||
    moment()
      .add(6, 'months')
      .endOf('month')
      .toDate();

  // map DAYS_OF_THE_WEEK to moment day integers, e.g. ['SUNDAY', 'TUESDAY'] -> [0, 2]
  const daysOfTheWeekThatCanBeAddedToArrayInMomentNumbers = daysOfTheWeekThatCanBeAddedToArray.map(
    dayEnumValue => daysOfTheWeekToMomentDaysNumberMap[dayEnumValue]
  );
  const currentFirstDayForArrayOfDays = moment(startDateOrDefault);
  const allIterationsOfDaySequences = [];
  const endDateAsMomentObj = moment(endDateOrDefault);
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

/**
 * Generates array of days for specific date range.
 * Days in the array do not include the final day, similar to a hotel stay
 * Example:
 *
 * input:
 * startDate: 1/1/2019 (Sunday)
 * endDate: 1/5/2019 (Thursday)
 *
 * output:
 *   ['Sun Jan 1 2019', 'Mon Jan 2 2019', 'Tue Jan 3 2019', 'Wed Jan 4 2019']
 *
 */
export const generateDateArrayForDateRange = (startDate, endDate) => {
  const currDate = moment(startDate);
  const dateArray = [];

  while (currDate.isBefore(moment(endDate))) {
    dateArray.push(formatted(currDate));
    currDate.add(1, 'day');
  }

  return dateArray;
};

/**
 * Generates an array of date arrays to check availabilities against for a given Alert
 * Example output:
 *
 *  [
 *    ['Sun Jan 1 2019', 'Mon Jan 2 2019', 'Tue Jan 3 2019', 'Wed Jan 4 2019'],
 *    ['Mon Jan 2 2019', 'Tue Jan 3 2019', 'Wed Jan 4 2019', 'Thu Jan 5 2019']
 *    ...
 *  ]
 *
 */
export const generateDateArrayToCheckAvailabilitiesForAlert = ({
  alertType,
  minNumNights,
  nightsOfTheWeekToIncludeInAlert,
  startDate,
  endDate
}) => {
  if (alertType === ALERT_TYPES.SPECIFIC_TRIP) {
    return [generateDateArrayForDateRange(startDate, endDate)];
  }
  return generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
    nightsOfTheWeekToIncludeInAlert,
    minNumNights,
    startDate,
    endDate
  );
};
