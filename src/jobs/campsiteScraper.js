import CampsiteFinder from '../models/campsite-finder';
import { RESERVE_CA, RESERVE_AMERICA } from '../constants';
import scrapeReserveAmerica from './reserveAmericaScraper';
import scrapeReserveCa from './reserveCaScraper';
import setDates from './setDates';

export default async () => {
  while (true && !process.env.PAUSE_SCRAPING) {
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

    await scrapeReserveAmerica(reserveAmericaCampsiteFinders);
    await scrapeReserveCa(reserveCaCampsiteFinders);
    const fiveMinutes = 5 * 60 * 1000;
    await new Promise(resolve => setTimeout(resolve, fiveMinutes));
  }
};
