import { differenceWith } from 'ramda';
import postSearch from '../external/caSearch';
import updateFinderResults from './updateFinderResults';
import sendEmail from '../mailers/mailer';
import Campground from '../models/campground';
import CampsiteFinder from '../models/campsite-finder';

export default async reserveCaCampgrounds => {
  try {
    console.log('STARTING RESERVE CA SCRAPE AT:', new Date());
    console.time('RESERVE CA');
    /* eslint-disable-next-line */
    for (const campground of reserveCaCampgrounds) {
      console.log(
        '----------------------START FOR CA CAMPGROUND---------------------'
      );
      console.log(
        'campground:',
        `${campground.placeName} ${campground.facilityName}`
      );
      try {
        const availabilities = await postSearch(campground);
        await Campground.findByIdAndUpdate(campground._id, { availabilities });
        const campgroundCampsiteFinders = await CampsiteFinder.find({
          campground: campground._id
        }).populate('campgrounds');

        /* eslint-disable-next-line */
        for (const campsiteFinder of campgroundCampsiteFinders) {
        }
        // returns old campsite finder
        const previousFinder = await updateFinderResults(
          campground._id,
          availabilities
        );

        if (!previousFinder) {
          return;
        }

        const newAvailabilites = differenceWith(
          (newAvail, oldAvail) => newAvail.date === oldAvail.date,
          availabilities || [],
          (previousFinder && previousFinder.datesAvailable) || []
        );

        if (newAvailabilites.length) {
          campsiteFinder.emailAddresses.forEach(emailAddress => {
            console.log('-------------RESERVE CA-------------');
            console.log('sending an email for:', campsiteFinder);
            console.log(
              'previous availabilites were:',
              previousFinder.datesAvailable
            );
            console.log('new availabilities are:', newAvailabilites);
            console.log('-------------END RESERVE CA-------------');
            sendEmail(emailAddress, newAvailabilites, campsiteFinder);
          });
        }
        console.log(
          '----------------------END FOR CA FINDER---------------------'
        );
      } catch (e) {
        console.log('error fetching new availabilities, did not update:', e);
      }
    }
    console.log('RESERVE CA SCRAPE ENDED AT:', new Date());
    console.timeEnd('RESERVE CA');
  } catch (err) {
    console.log('RESERVE CA SCRAPING ERROR:', err);
  }
};
