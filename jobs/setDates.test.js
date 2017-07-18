/* eslint-env jest */
const moment = require('moment')
const {
  daysUntilFriday,
  nextFriday,
  fridaysInRange,
  generateDates,
  generateLengthOfStay,
  formatted
} = require('./datesGenerator')

Date.now = jest.fn(() => 1500344808897) // 07.17.2017 (monday)
const tues = moment('2017-07-18T12:20:38.936')
const thurs = moment('2017-07-20T18:20:38.936')
const fri = moment('2017-07-21T03:20:38.936')
const sat = moment('2017-07-22T03:20:38.936')
const endFriday = moment()
  .add(6, 'months')
  .endOf('month')
  .subtract(7, 'days')
  .day('Friday')

describe('daysUntilFriday', () => {
  test('it outputs days until the next friday given input start date', () => {
    expect(daysUntilFriday(tues)).toBe(3)
    expect(daysUntilFriday(thurs)).toBe(1)
    expect(daysUntilFriday(sat)).toBe(-1)
    expect(daysUntilFriday(fri)).toBe(0)
  })
})

describe('nextFriday', () => {
  test('it shows next friday more than 1 day ahead', () => {
    expect(nextFriday(tues)).toEqual(moment(tues).add(3, 'days'))
    expect(nextFriday(thurs)).toEqual(moment(thurs).add(8, 'days'))
    expect(nextFriday(sat)).toEqual(moment(sat).add(6, 'days'))
    expect(nextFriday(fri)).toEqual(moment(fri).add(7, 'days'))
  })
})

describe('fridaysInRange', () => {
  test('it returns fridays in range given', () => {
    const secondTues = moment(tues).add(7, 'days')
    expect(fridaysInRange(tues, secondTues)).toEqual([
      moment(tues).add(3, 'days')
    ])

    const thirdTues = moment(tues).add(14, 'days')
    expect(fridaysInRange(tues, thirdTues)).toEqual([
      moment(tues).add(3, 'days'),
      moment(tues).add(10, 'days')
    ])
  })

  test('it returns all fridays for the next six months if no range given', () => {
    const fridays = fridaysInRange()
    expect(fridays[0]).toEqual(moment().day('Friday'))
    expect(fridays[fridays.length - 1].toDate().toDateString()).toEqual(
      formatted(endFriday)
    )
    expect(fridays.length).toBe(28)
  })

  test('it returns all fridays within range farther than 1 day away if startDate is in past', () => {
    const startDate = moment().subtract(10, 'days')
    const endDate = moment().add(7, 'days')
    expect(fridaysInRange(startDate, endDate)).toEqual([
      moment().add(4, 'days')
    ])
  })

  test('it returns an empty array if endDate is in past', () => {
    const endDate = moment().subtract(1, 'days')
    expect(fridaysInRange(undefined, endDate)).toEqual([])
  })

  test('it returns an empty array if endDate is before startDate', () => {
    const startDate = moment().add(10, 'days')
    const endDate = moment(startDate).subtract(1, 'days')
    expect(fridaysInRange(startDate, endDate)).toEqual([])
  })
})

describe('generateDates', () => {
  test('it returns six months formatted dates if setting is six months', () => {
    const dates = generateDates({
      startDate: moment(),
      endDate: moment().add(20, 'days'),
      dateOption: 'NEXT_SIX_MONTHS',
      isWeekendsOnly: false
    })
    expect(dates[0]).toEqual(formatted(moment().day('Friday')))
    expect(dates[dates.length - 1]).toEqual(formatted(endFriday))
    expect(dates.length).toBe(28)
  })

  test('it returns formatted fridays in range if setting is weekends only', () => {
    const startDate = moment().subtract(10, 'days')
    const endDate = moment().add(7, 'days')
    expect(
      generateDates({
        startDate,
        endDate,
        isWeekendsOnly: true,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([formatted(moment().add(4, 'days'))])
  })

  test('it returns formatted start date if valid', () => {
    const startDate = moment().add(2, 'days')
    expect(
      generateDates({
        startDate,
        endDate: moment(startDate).add(10, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([formatted(startDate)])
  })

  test('it returns empty array if start date less than 2 days from now', () => {
    const startDate = moment().add(1, 'days')
    expect(
      generateDates({
        startDate,
        endDate: moment(startDate).add(10, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toEqual([])
  })
})

describe('generateLengthOfStay', () => {
  test('it returns default if next six months option', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: false,
        dateOption: 'NEXT_SIX_MONTHS'
      })
    ).toBe(2)
  })

  test('it returns default if weekends option', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: true,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toBe(2)
  })

  test('it returns num days from endDate to startDate', () => {
    expect(
      generateLengthOfStay({
        startDate: moment(),
        endDate: moment().add(5, 'days'),
        isWeekendsOnly: false,
        dateOption: 'SPECIFIC_DATES'
      })
    ).toBe(5)
  })
})
