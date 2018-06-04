const moment = require("moment");
const CampsiteFinder = require("../models/campsite-finder");
const { Observable } = require("rx");
const { RESERVE_CA, RESERVE_AMERICA } = require("../constants");
const scrapeReserveAmerica = require("./reserveAmericaScraper");
const scrapeReserveCa = require("./reserveCaScraper");
const setDates = require("./setDates");

module.exports = async () => {
  const allCampsiteFinders = await CampsiteFinder.find({
    isActive: true
  }).populate("campgroundId");

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

  scrapeReserveAmerica(reserveAmericaCampsiteFinders);
  scrapeReserveCa(reserveCaCampsiteFinders);
};
