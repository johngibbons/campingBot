const CampsiteFinder = require('../models/campsite-finder');
const { RESERVE_CA, RESERVE_AMERICA } = require('../constants');
const scrapeReserveAmerica = require('./reserveAmericaScraper');
const scrapeReserveCa = require('./reserveCaScraper');
const setDates = require('./setDates');

module.exports = async () => {
  while (true && !process.env.PAUSE_SCRAPING) {
    const allCampsiteFinders = await CampsiteFinder.find({
      isActive: true
    }).populate('campgroundId');

    // console.log('allCampsiteFinders', allCampsiteFinders);

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

    await scrapeReserveAmerica(reserveAmericaCampsiteFinders);
    await scrapeReserveCa(reserveCaCampsiteFinders);
    const fiveMinutes = 5 * 60 * 1000;
    const waitTime = Number(process.env.SCRAPE_DELAY) || fiveMinutes;
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
};
