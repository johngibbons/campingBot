"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _datesGenerator = require("./datesGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
Date.now = jest.fn(function () {
  return 1500344808897;
}); // 07.17.2017 (monday)

var tues = (0, _moment.default)('2017-07-18T12:20:38.936');
var thurs = (0, _moment.default)('2017-07-20T18:20:38.936');
var fri = (0, _moment.default)('2017-07-21T03:20:38.936');
var sat = (0, _moment.default)('2017-07-22T03:20:38.936');
var endFriday = (0, _moment.default)().add(6, 'months').endOf('month').subtract(7, 'days').day('Friday');
describe('daysUntilFriday', function () {
  test('it outputs days until the next friday given input start date', function () {
    expect((0, _datesGenerator.daysUntilFriday)(tues)).toBe(3);
    expect((0, _datesGenerator.daysUntilFriday)(thurs)).toBe(1);
    expect((0, _datesGenerator.daysUntilFriday)(sat)).toBe(-1);
    expect((0, _datesGenerator.daysUntilFriday)(fri)).toBe(0);
  });
});
describe('nextFriday', function () {
  test('it shows the next friday', function () {
    expect((0, _datesGenerator.nextFriday)(tues)).toEqual((0, _moment.default)(tues).add(3, 'days'));
    expect((0, _datesGenerator.nextFriday)(thurs)).toEqual((0, _moment.default)(thurs).add(1, 'days'));
    expect((0, _datesGenerator.nextFriday)(sat)).toEqual((0, _moment.default)(sat).add(6, 'days'));
    expect((0, _datesGenerator.nextFriday)(fri)).toEqual((0, _moment.default)(fri));
  });
});
describe('fridaysInRange', function () {
  test('it returns fridays in range given', function () {
    var secondTues = (0, _moment.default)(tues).add(7, 'days');
    expect((0, _datesGenerator.fridaysInRange)(tues, secondTues)).toEqual([(0, _moment.default)(tues).add(3, 'days')]);
    var thirdTues = (0, _moment.default)(tues).add(14, 'days');
    expect((0, _datesGenerator.fridaysInRange)(tues, thirdTues)).toEqual([(0, _moment.default)(tues).add(3, 'days'), (0, _moment.default)(tues).add(10, 'days')]);
  });
  test('it returns all fridays for the next six months if no range given', function () {
    var fridays = (0, _datesGenerator.fridaysInRange)();
    expect(fridays[0]).toEqual((0, _moment.default)().day('Friday'));
    expect(fridays[fridays.length - 1].toDate().toDateString()).toEqual((0, _datesGenerator.formatted)(endFriday));
    expect(fridays.length).toBe(28);
  });
  test('it returns all fridays within range farther than 1 day away if startDate is in past', function () {
    var startDate = (0, _moment.default)().subtract(10, 'days');
    var endDate = (0, _moment.default)().add(7, 'days');
    expect((0, _datesGenerator.fridaysInRange)(startDate, endDate)).toEqual([(0, _moment.default)().add(4, 'days')]);
  });
  test('it returns an empty array if endDate is in past', function () {
    var endDate = (0, _moment.default)().subtract(1, 'days');
    expect((0, _datesGenerator.fridaysInRange)(undefined, endDate)).toEqual([]);
  });
  test('it returns an empty array if endDate is before startDate', function () {
    var startDate = (0, _moment.default)().add(10, 'days');
    var endDate = (0, _moment.default)(startDate).subtract(1, 'days');
    expect((0, _datesGenerator.fridaysInRange)(startDate, endDate)).toEqual([]);
  });
});
describe('generateDates', function () {
  test('it returns six months formatted dates if setting is six months', function () {
    var dates = (0, _datesGenerator.generateDates)({
      startDate: (0, _moment.default)(),
      endDate: (0, _moment.default)().add(20, 'days'),
      dateOption: 'NEXT_SIX_MONTHS',
      isWeekendsOnly: false
    });
    expect(dates[0]).toEqual((0, _datesGenerator.formatted)((0, _moment.default)().day('Friday')));
    expect(dates[dates.length - 1]).toEqual((0, _datesGenerator.formatted)(endFriday));
    expect(dates.length).toBe(28);
  });
  test('it returns formatted fridays in range if setting is weekends only', function () {
    var startDate = (0, _moment.default)().subtract(10, 'days');
    var endDate = (0, _moment.default)().add(7, 'days');
    expect((0, _datesGenerator.generateDates)({
      startDate: startDate,
      endDate: endDate,
      isWeekendsOnly: true,
      dateOption: 'SPECIFIC_DATES'
    })).toEqual([(0, _datesGenerator.formatted)((0, _moment.default)().add(4, 'days'))]);
  });
  test('it returns formatted start date if valid', function () {
    var startDate = (0, _moment.default)().add(2, 'days');
    expect((0, _datesGenerator.generateDates)({
      startDate: startDate,
      endDate: (0, _moment.default)(startDate).add(10, 'days'),
      isWeekendsOnly: false,
      dateOption: 'SPECIFIC_DATES'
    })).toEqual([(0, _datesGenerator.formatted)(startDate)]);
  });
  test('it returns empty array if start date less than 2 days from now', function () {
    var startDate = (0, _moment.default)().add(1, 'days');
    expect((0, _datesGenerator.generateDates)({
      startDate: startDate,
      endDate: (0, _moment.default)(startDate).add(10, 'days'),
      isWeekendsOnly: false,
      dateOption: 'SPECIFIC_DATES'
    })).toEqual([]);
  });
  test('specific', function () {
    var campsiteFinder = {
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
        url: 'https://www.reserveamerica.com/camping/angel-island-sp/r/campgroundDetails.do?contractCode=CA&parkId=120003',
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
    expect((0, _datesGenerator.generateDates)(campsiteFinder)).toEqual(['Fri Jul 21 2017']);
  });
});
describe('generateLengthOfStay', function () {
  test('it returns default if next six months option', function () {
    expect((0, _datesGenerator.generateLengthOfStay)({
      startDate: (0, _moment.default)(),
      endDate: (0, _moment.default)().add(5, 'days'),
      isWeekendsOnly: false,
      dateOption: 'NEXT_SIX_MONTHS'
    })).toBe(2);
  });
  test('it returns default if weekends option', function () {
    expect((0, _datesGenerator.generateLengthOfStay)({
      startDate: (0, _moment.default)(),
      endDate: (0, _moment.default)().add(5, 'days'),
      isWeekendsOnly: true,
      dateOption: 'SPECIFIC_DATES'
    })).toBe(2);
  });
  test('it returns num days from endDate to startDate', function () {
    expect((0, _datesGenerator.generateLengthOfStay)({
      startDate: (0, _moment.default)(),
      endDate: (0, _moment.default)().add(5, 'days'),
      isWeekendsOnly: false,
      dateOption: 'SPECIFIC_DATES'
    })).toBe(5);
  });
});