const CampsiteFinder = require('../models/campsite-finder');
const { RESERVE_CA, RESERVE_AMERICA } = require('../constants');
const scrapeReserveAmerica = require('./reserveAmericaScraper');
const scrapeReserveCa = require('./reserveCaScraper');
const setDates = require('./setDates');

module.exports = async () => {
  while (true) {
    const allCampsiteFinders = await CampsiteFinder.find({
      isActive: true
    }).populate('campgroundId');

    const withDates = allCampsiteFinders
      .map(campsiteFinder => setDates(campsiteFinder))
      .reduce((acc, curr) => [...acc, ...curr], []);

    const reserveAmericaCampsiteFinders = withDates.filter(
      campsiteFinder =>
        campsiteFinder.campgroundId.reservationAgency === RESERVE_AMERICA
    );

    const reserveCaCampsiteFinders = withDates.filter(
      campsiteFinder =>
        campsiteFinder.campgroundId.reservationAgency === RESERVE_CA
    );

    await Promise.all([
      scrapeReserveAmerica(reserveAmericaCampsiteFinders),
      scrapeReserveCa(reserveCaCampsiteFinders)
    ]);
    const fiveMinutes = 5 * 60 * 1000;
    await new Promise(resolve => setTimeout(resolve, 5 * 1000));
  }
};
