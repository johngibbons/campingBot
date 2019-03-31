import seedAmericaCampgrounds from './seedCampgrounds';
import seedCaCampgrounds from './seedCaCampgrounds';
import resetCampgrounds from './resetCampgrounds';
import { RESERVE_CA, RESERVE_AMERICA } from '../constants';
import Campground from '../models/campground';

export default async () => {
  try {
    await resetCampgrounds();
    await seedAmericaCampgrounds();
    await seedCaCampgrounds();

    const count = await Campground.count({ reservationAgency: RESERVE_CA });
    console.log(`done seeding ${count} California campgrounds`);

    const amCount = await Campground.count({
      reservationAgency: RESERVE_AMERICA
    });
    console.log(`done seeding ${amCount} American campgrounds`);

    const totalCount = await Campground.count({});
    console.log(`done seeding ${totalCount} total campgrounds`);
  } catch (e) {
    console.log('error seeding campgrounds', e);
  }
};
