const { generateDates, generateLengthOfStay } = require('./datesGenerator')

module.exports = campsiteFinder => {
  const campsiteFinderObj = campsiteFinder.toObject()
  const dates = generateDates(campsiteFinder)
  const lengthOfStay = generateLengthOfStay(campsiteFinder)
  return dates.map(campingDate =>
    Object.assign({}, campsiteFinderObj, { campingDate, lengthOfStay })
  )
}
