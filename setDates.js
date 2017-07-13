const { generateDates, generateLengthOfStay } = require('./datesGenerator')

module.exports = campsiteFinder => {
  const campsiteFinderObj = campsiteFinder.toObject()
  const dates = generateDates(campsiteFinder)
  const lengthOfStay = generateLengthOfStay(campsiteFinder)
  const campsiteFinders = dates.map(campingDate =>
    Object.assign({}, campsiteFinderObj, { campingDate, lengthOfStay })
  )
  return new Promise((resolve, reject) => resolve(campsiteFinders))
}
