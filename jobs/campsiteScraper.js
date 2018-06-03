const moment = require("moment");
const CampsiteFinder = require("../models/campsite-finder");
const { Observable } = require("rx");
const { RESERVE_CA, RESERVE_AMERICA } = require("../constants");
const scrapeReserveAmerica = require("./reserveAmericaScraper");
const scrapeReserveCa = require("./reserveCaScraper");
const setDates = require("./setDates");

module.exports = () => {
  const allCampsiteFinders = CampsiteFinder.find({
    isActive: true
  }).populate("campgroundId");

  const setDates$ = campsiteFinder => Observable.from(setDates(campsiteFinder));

  const fiveMin = 5 * 60 * 1000;

  const allCampsiteFinders$ = Observable.fromPromise(allCampsiteFinders)
    .mergeMap(Observable.from)
    .concatMap(setDates$)
    .do(() => console.time("test"))
    .do(() =>
      console.log(
        "Sequence starting at:",
        moment().format("MMMM Do YYYY, h:mm:ss a")
      )
    );

  const reserveAmericaCampsiteFinders$ = allCampsiteFinders$.filter(
    cf => cf.campgroundId.reservationAgency === RESERVE_AMERICA
  );

  const reserveCaCampsiteFinders$ = allCampsiteFinders$.filter(
    cf => cf.campgroundId.reservationAgency === RESERVE_CA
  );

  scrapeReserveAmerica(reserveAmericaCampsiteFinders$);
  scrapeReserveCa(reserveCaCampsiteFinders$);
};
