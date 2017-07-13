const moment = require('moment')

const daysUntilFriday = startDate => {
  return Math.ceil(moment().day('Friday').diff(moment(startDate), 'days', true))
}

const formatted = date => moment(date).format('ddd MMM D YYYY')

const allFridays = () => {
  let fridays = []
  const date =
    daysUntilFriday(moment()) > 1 ? moment().day('Friday') : moment().day(12)
  while (date < moment().add(6, 'months').endOf('month')) {
    fridays.push(formatted(moment(date)))
    date.add(7, 'days')
  }
  return fridays
}

const fridaysInRange = (startDate, endDate) => {
  let fridays = []
  const date =
    daysUntilFriday(moment(startDate)) > 1
      ? moment().day('Friday')
      : moment().day(12)

  while (date < moment(endDate)) {
    fridays.push(formatted(moment(date)))
    date.add(7, 'days')
  }
  return fridays
}

exports.generateDates = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS') return allFridays()

  const datesAreValid =
    startDate &&
    endDate &&
    Math.ceil(moment(endDate).diff(moment(startDate), 'days')) > 0

  const meetsMinimumStartDate =
    Math.ceil(moment(startDate).diff(moment(), 'days')) > 1

  if (isWeekendsOnly && datesAreValid) return fridaysInRange(startDate, endDate)
  if (meetsMinimumStartDate) return [formatted(moment(startDate))]
  return []
}

exports.generateLengthOfStay = ({
  startDate,
  endDate,
  isWeekendsOnly,
  dateOption
}) => {
  if (dateOption === 'NEXT_SIX_MONTHS' || isWeekendsOnly) return 2
  return Math.ceil(moment(endDate).diff(moment(startDate), 'days'))
}
