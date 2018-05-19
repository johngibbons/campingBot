const CampsiteFinder = require("../models/campsite-finder");
const { Observable } = require("rx");
const { RESERVE_CA, RESERVE_AMERICA } = require("../constants");
const scrapeReserveAmerica = require("./reserveAmericaScraper");

module.exports = () => {
  const allCampsiteFinders = CampsiteFinder.find({
    isActive: true
  }).populate("campgroundId");

  const allCampsiteFinders$ = Observable.fromPromise(
    allCampsiteFinders
  ).mergeMap(Observable.from);

  const reserveAmericaCampsiteFinders$ = allCampsiteFinders$.filter(
    cf => cf.campgroundId.reservationAgency === RESERVE_AMERICA
  );

  const reserveCaCampsiteFinders$ = allCampsiteFinders$.filter(
    cf => cf.campgroundId.reservationAgency === RESERVE_CA
  );

  scrapeReserveAmerica(reserveAmericaCampsiteFinders$);
  scrapeReserveCa(reserveCaCampsiteFinders$);
};
