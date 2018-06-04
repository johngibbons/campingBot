const {
  generateDates,
  generateLengthOfStay,
  generateAllDates
} = require('./datesGenerator');
const { RESERVE_CA, RESERVE_AMERICA } = require('../constants');

module.exports = campsiteFinder => {
  if (campsiteFinder.campgroundId.reservationAgency === RESERVE_AMERICA) {
    const campsiteFinderObj = campsiteFinder.toObject();
    const dates = generateDates(campsiteFinder);
    const lengthOfStay = generateLengthOfStay(campsiteFinder);
    return dates.map(campingDate =>
      Object.assign({}, campsiteFinderObj, { campingDate, lengthOfStay })
    );
  } else {
    const campsiteFinderObj = campsiteFinder.toObject();
    const allDates = generateAllDates(campsiteFinder);
    return [Object.assign({}, campsiteFinderObj, { allDates })];
  }
};
