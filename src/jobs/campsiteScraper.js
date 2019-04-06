import CampsiteFinder from '../models/campsite-finder';
import Alert from '../models/alert';
import { RESERVE_CA, RESERVE_AMERICA } from '../constants';
import scrapeReserveAmerica from './reserveAmericaScraper';
import scrapeReserveCa from './reserveCaScraper';
import setDates from './setDates';

export default async () => {
  while (true && !process.env.PAUSE_SCRAPING) {
    const allCampsiteFinders = await CampsiteFinder.find({
      isActive: true
    }).populate('campgroundId');
    const allAlerts = await Alert.find({ isActive: true }).populate(
      'campgrounds'
    );
    const allAlertCampgrounds = allAlerts.reduce((campgrounds, alert) => {
      alert.campgrounds.forEach(campground => {
        // eslint-disable-next-line no-param-reassign
        campgrounds[campground._id] = campground;
      });
      return campgrounds;
    }, {});

    const reserveAmericaCampgrounds = allAlertCampgrounds.filter(
      campground => campground.reservationAgency === RESERVE_AMERICA
    );

    const reserveCaCampgrounds = allAlertCampgrounds.filter(
      campground => campground.reservationAgency === RESERVE_CA
    );

    await scrapeReserveCa(reserveCaCampgrounds);
    await scrapeReserveAmerica(reserveCaCampgrounds);

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
    await new Promise(resolve => setTimeout(resolve, fiveMinutes));
  }
};
