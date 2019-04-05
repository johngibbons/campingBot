import {
  generateDates,
  generateLengthOfStay,
  generateAllDates
} from './datesGenerator';
import { RESERVE_AMERICA } from '../constants';

export default campsiteFinder => {
  if (campsiteFinder.campgroundId.reservationAgency === RESERVE_AMERICA) {
    const campsiteFinderObj = campsiteFinder.toObject();
    const dates = generateDates(campsiteFinder);
    const lengthOfStay = generateLengthOfStay(campsiteFinder);

    return dates.map(campingDate =>
      Object.assign({}, campsiteFinderObj, { campingDate, lengthOfStay })
    );
  }

  const campsiteFinderObj = campsiteFinder.toObject();
  const allDates = generateAllDates(campsiteFinder);
  return [Object.assign({}, campsiteFinderObj, { allDates })];
};