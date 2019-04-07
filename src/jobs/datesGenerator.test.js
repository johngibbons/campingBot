/* eslint-env jest */
import moment from 'moment';
import {
  daysUntilFriday,
  nextFriday,
  fridaysInRange,
  generateDates,
  generateLengthOfStay,
  formatted,
  generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange,
  generateDateArrayForDateRange,
  generateDateArrayToCheckAvailabilitiesForAlert
} from './datesGenerator';
import { DAYS_OF_THE_WEEK, ALERT_TYPES } from '../models/alert';

Date.now = jest.fn(() => 1500344808897); // 07.17.2017 (monday)
const tues = moment('2017-07-18T12:20:38.936');
const thurs = moment('2017-07-20T18:20:38.936');
const fri = moment('2017-07-21T03:20:38.936');
const sat = moment('2017-07-22T03:20:38.936');
const endFriday = moment()
  .add(6, 'months')
  .endOf('month')
  .subtract(7, 'days')
  .day('Friday');

describe('daysUntilFriday', () => {
  test('it outputs days until the next friday given input start date', () => {
    expect(daysUntilFriday(tues)).toBe(3);
    expect(daysUntilFriday(thurs)).toBe(1);
    expect(daysUntilFriday(sat)).toBe(-1);
    expect(daysUntilFriday(fri)).toBe(0);
  });
});

describe('nextFriday', () => {
  test('it shows the next friday', () => {
    expect(nextFriday(tues)).toEqual(moment(tues).add(3, 'days'));
    expect(nextFriday(thurs)).toEqual(moment(thurs).add(1, 'days'));
    expect(nextFriday(sat)).toEqual(moment(sat).add(6, 'days'));
    expect(nextFriday(fri)).toEqual(moment(fri));
  });
});

describe('fridaysInRange', () => {
  test('it returns fridays in range given', () => {
    const secondTues = moment(tues).add(7, 'days');
    expect(fridaysInRange(tues, secondTues)).toEqual([
      moment(tues).add(3, 'days')
    ]);

    const thirdTues = moment(tues).add(14, 'days');
    expect(fridaysInRange(tues, thirdTues)).toEqual([
      moment(tues).add(3, 'days'),
      moment(tues).add(10, 'days')
    ]);
  });

  test('it returns all fridays for the next six months if no range given', () => {
    const fridays = fridaysInRange();
    expect(fridays[0]).toEqual(moment().day('Friday'));
    expect(fridays[fridays.length - 1].toDate().toDateString()).toEqual(
      formatted(endFriday)
    );
    expect(fridays.length).toBe(28);
  });

  test('it returns all fridays within range farther than 1 day away if startDate is in past', () => {
    const startDate = moment().subtract(10, 'days');
    const endDate = moment().add(7, 'days');
    expect(fridaysInRange(startDate, endDate)).toEqual([
      moment().add(4, 'days')
    ]);
  });

  test('it returns an empty array if endDate is in past', () => {
    const endDate = moment().subtract(1, 'days');
    expect(fridaysInRange(undefined, endDate)).toEqual([]);
  });

  test('it returns an empty array if endDate is before startDate', () => {
    const startDate = moment().add(10, 'days');
    const endDate = moment(startDate).subtract(1, 'days');
    expect(fridaysInRange(startDate, endDate)).toEqual([]);
  });
});

describe('generateDates', () => {
  test('it returns six months formatted dates if setting is six months', () => {
    const dates = generateDates({
      startDate: moment(),
      endDate: moment().add(20, 'days'),
      dateOption: 'NEXT_SIX_MONTHS',
      isWeekendsOnly: false
    });
    expect(dates[0]).toEqual(formatted(moment().day('Friday')));
    expect(dates[dates.length - 1]).toEqual(formatted(endFriday));
    expect(dates.length).toBe(28);
  });

  test('it returns formatted fridays in range if setting is weekends only', () => {
    const startDate = moment().subtract(10, 'days');
    const endDate = moment().add(7, 'days');
    expect(
      generateDates({
        startDate,
        endDate,
        isWeekendsOnly: true,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([formatted(moment().add(4, 'days'))]);
  });

  test('it returns formatted start date if valid', () => {
    const startDate = moment().add(2, 'days');
    expect(
      generateDates({
        startDate,
        endDate: moment(startDate).add(10, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([formatted(startDate)]);
  });

  test('it returns empty array if start date less than 2 days from now', () => {
    const startDate = moment().add(1, 'days');
    expect(
      generateDates({
        startDate,
        endDate: moment(startDate).add(10, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([]);
  });

  test('specific', () => {
    const campsiteFinder = {
      _id: '596d4b924a7739c8ae8d3657',
      campgroundId: {
        _id: '5966a6db80563d31ca994549',
        __v: 0,
        agencyIcon: '',
        agencyName: '',
        contractCode: 'CA',
        contractType: 'STATE',
        facilityId: '120003',
        facilityName: 'ANGEL ISLAND SP',
        facilityPhoto: '/webphotos/CA/pid120003/0/80x53.jpg',
        latitude: '37.8641667',
        longitude: '-122.4308333',
        regionName: '',
        shortName: 'ANGE',
        state: 'CA',
        url:
          'https://www.reserveamerica.com/camping/angel-island-sp/r/campgroundDetails.do?contractCode=CA&parkId=120003',
        updatedAt: '2017-07-12T22:46:51.019Z',
        createdAt: '2017-07-12T22:46:51.019Z'
      },
      __v: 0,
      endDate: '2017-07-24T19:00:00.000Z',
      startDate: '2017-07-21T19:00:00.000Z',
      dateOption: 'SPECIFIC_DATES',
      datesAvailable: [],
      emailAddresses: [],
      isSendingEmails: true,
      isWeekendsOnly: true,
      isActive: true,
      updatedAt: '2017-07-18T00:01:52.690Z',
      createdAt: '2017-07-17T23:43:14.813Z'
    };
    expect(generateDates(campsiteFinder)).toEqual(['Fri Jul 21 2017']);
  });
});

describe('generateLengthOfStay', () => {
  test('it returns default if next six months option', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: false,
        dateOption: 'NEXT_SIX_MONTHS'
      })
    ).toBe(2);
  });

  test('it returns default if weekends option', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: true,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toBe(2);
  });

  test('it returns num days from endDate to startDate', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toBe(5);
  });
});

describe('generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange', () => {
  test('it generates the correct date arrays for a minNumNights of 1', () => {
    const minNumNights = 1;
    const daysOfTheWeek = [DAYS_OF_THE_WEEK.MONDAY, DAYS_OF_THE_WEEK.TUESDAY];
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues)
      .add(1, 'week')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate,
        endDate
      )
    ).toEqual([['Tue Jul 18 2017'], ['Mon Jul 24 2017']]);
  });

  test('it generates the correct date arrays for a minNumNights of 2', () => {
    const minNumNights = 2;
    const daysOfTheWeek = [
      DAYS_OF_THE_WEEK.MONDAY,
      DAYS_OF_THE_WEEK.TUESDAY,
      DAYS_OF_THE_WEEK.WEDNESDAY,
      DAYS_OF_THE_WEEK.SUNDAY
    ];
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues)
      .add(1, 'week')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate,
        endDate
      )
    ).toEqual([
      ['Tue Jul 18 2017', 'Wed Jul 19 2017'],
      ['Sun Jul 23 2017', 'Mon Jul 24 2017']
    ]);
  });

  test('it generates the correct date arrays for a minNumNights of 3', () => {
    const minNumNights = 3;
    const daysOfTheWeek = [
      DAYS_OF_THE_WEEK.MONDAY,
      DAYS_OF_THE_WEEK.TUESDAY,
      DAYS_OF_THE_WEEK.WEDNESDAY,
      DAYS_OF_THE_WEEK.SUNDAY
    ];
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues) // 8/1/2017
      .add(2, 'weeks')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate,
        endDate
      )
    ).toEqual([
      ['Sun Jul 23 2017', 'Mon Jul 24 2017', 'Tue Jul 25 2017'],
      ['Mon Jul 24 2017', 'Tue Jul 25 2017', 'Wed Jul 26 2017']
    ]);
  });

  test('it checks for the next six months if no endDate is specified', () => {
    const minNumNights = 2;
    const daysOfTheWeek = [DAYS_OF_THE_WEEK.MONDAY, DAYS_OF_THE_WEEK.TUESDAY];
    const startDate = tues.toDate(); // 7/18/2017

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate
      )
    ).toEqual([
      ['Mon Jul 24 2017', 'Tue Jul 25 2017'],
      ['Mon Jul 31 2017', 'Tue Aug 01 2017'],
      ['Mon Aug 07 2017', 'Tue Aug 08 2017'],
      ['Mon Aug 14 2017', 'Tue Aug 15 2017'],
      ['Mon Aug 21 2017', 'Tue Aug 22 2017'],
      ['Mon Aug 28 2017', 'Tue Aug 29 2017'],
      ['Mon Sep 04 2017', 'Tue Sep 05 2017'],
      ['Mon Sep 11 2017', 'Tue Sep 12 2017'],
      ['Mon Sep 18 2017', 'Tue Sep 19 2017'],
      ['Mon Sep 25 2017', 'Tue Sep 26 2017'],
      ['Mon Oct 02 2017', 'Tue Oct 03 2017'],
      ['Mon Oct 09 2017', 'Tue Oct 10 2017'],
      ['Mon Oct 16 2017', 'Tue Oct 17 2017'],
      ['Mon Oct 23 2017', 'Tue Oct 24 2017'],
      ['Mon Oct 30 2017', 'Tue Oct 31 2017'],
      ['Mon Nov 06 2017', 'Tue Nov 07 2017'],
      ['Mon Nov 13 2017', 'Tue Nov 14 2017'],
      ['Mon Nov 20 2017', 'Tue Nov 21 2017'],
      ['Mon Nov 27 2017', 'Tue Nov 28 2017'],
      ['Mon Dec 04 2017', 'Tue Dec 05 2017'],
      ['Mon Dec 11 2017', 'Tue Dec 12 2017'],
      ['Mon Dec 18 2017', 'Tue Dec 19 2017'],
      ['Mon Dec 25 2017', 'Tue Dec 26 2017'],
      ['Mon Jan 01 2018', 'Tue Jan 02 2018'],
      ['Mon Jan 08 2018', 'Tue Jan 09 2018'],
      ['Mon Jan 15 2018', 'Tue Jan 16 2018'],
      ['Mon Jan 22 2018', 'Tue Jan 23 2018'],
      ['Mon Jan 29 2018', 'Tue Jan 30 2018']
    ]);
  });

  test('it checks from today (mon 7/17/2017) if no startDate specified', () => {
    const minNumNights = 3;
    const daysOfTheWeek = [
      DAYS_OF_THE_WEEK.MONDAY,
      DAYS_OF_THE_WEEK.TUESDAY,
      DAYS_OF_THE_WEEK.WEDNESDAY,
      DAYS_OF_THE_WEEK.SUNDAY
    ];
    const endDate = moment() // 8/1/2017
      .add(2, 'weeks')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        null,
        endDate
      )
    ).toEqual([
      ['Mon Jul 17 2017', 'Tue Jul 18 2017', 'Wed Jul 19 2017'],
      ['Sun Jul 23 2017', 'Mon Jul 24 2017', 'Tue Jul 25 2017'],
      ['Mon Jul 24 2017', 'Tue Jul 25 2017', 'Wed Jul 26 2017']
    ]);
  });

  test('it returns an empty array if no values would be valid', () => {
    const minNumNights = 3;
    const daysOfTheWeek = [
      DAYS_OF_THE_WEEK.MONDAY,
      DAYS_OF_THE_WEEK.WEDNESDAY,
      DAYS_OF_THE_WEEK.SUNDAY
    ];
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues) // 8/1/2017
      .add(2, 'weeks')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate,
        endDate
      )
    ).toEqual([]);
  });

  test('it returns an empty array if startDate is after endDate', () => {
    const minNumNights = 3;
    const daysOfTheWeek = [
      DAYS_OF_THE_WEEK.MONDAY,
      DAYS_OF_THE_WEEK.WEDNESDAY,
      DAYS_OF_THE_WEEK.SUNDAY
    ];
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues) // 7/17/2017
      .subtract(1, 'day')
      .toDate();

    expect(
      generateDateArraysForDayOfTheWeekAvailabilityWithinDateRange(
        daysOfTheWeek,
        minNumNights,
        startDate,
        endDate
      )
    ).toEqual([]);
  });
});

describe('generateDateArrayForDateRange', () => {
  test('it generates the correct date array for a date range', () => {
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues)
      .add(1, 'week')
      .toDate();

    expect(generateDateArrayForDateRange(startDate, endDate)).toEqual([
      'Tue Jul 18 2017',
      'Wed Jul 19 2017',
      'Thu Jul 20 2017',
      'Fri Jul 21 2017',
      'Sat Jul 22 2017',
      'Sun Jul 23 2017',
      'Mon Jul 24 2017'
    ]);
  });

  test('it returns an empty array for startDate that is equal to endDate', () => {
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues);

    expect(generateDateArrayForDateRange(startDate, endDate)).toEqual([]);
  });
});

describe('generateAllDates', () => {
  test('it generates the correct array of dates for a specific trip alert', () => {
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues)
      .add(1, 'week')
      .toDate();

    expect(
      generateDateArrayToCheckAvailabilitiesForAlert({
        alertType: ALERT_TYPES.SPECIFIC_TRIP,
        startDate,
        endDate
      })
    ).toEqual([
      [
        'Tue Jul 18 2017',
        'Wed Jul 19 2017',
        'Thu Jul 20 2017',
        'Fri Jul 21 2017',
        'Sat Jul 22 2017',
        'Sun Jul 23 2017',
        'Mon Jul 24 2017'
      ]
    ]);
  });

  test('it generates the correct array of dates for a general availability alert', () => {
    const startDate = tues.toDate(); // 7/18/2017
    const endDate = moment(tues)
      .add(1, 'week')
      .toDate();

    expect(
      generateDateArrayToCheckAvailabilitiesForAlert({
        alertType: ALERT_TYPES.GENERAL_AVAILABILITY,
        minNumNights: 2,
        nightsOfTheWeekToIncludeInAlert: [
          DAYS_OF_THE_WEEK.FRIDAY,
          DAYS_OF_THE_WEEK.SATURDAY
        ],
        startDate,
        endDate
      })
    ).toEqual([['Fri Jul 21 2017', 'Sat Jul 22 2017']]);
  });
});
