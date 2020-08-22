const postSearch = require('../jobs/reserveCaHeadlessScraper');
const updateFinderResults = require('./updateFinderResults');
const sendEmail = require('../mailers/mailer');
const { differenceWith } = require('ramda');

module.exports = async reserveCaCampsiteFinders => {
  try {
    console.log('STARTING RESERVE CA SCRAPE AT:', new Date());
    console.time('RESERVE CA');
    /* eslint-disable-next-line */
    for (const campsiteFinder of reserveCaCampsiteFinders) {
      console.log(
        '----------------------START FOR CA FINDER---------------------'
      );
      console.log(
        'campsiteFinder:',
        `${campsiteFinder.campgroundId.placeName} ${
          campsiteFinder.campgroundId.facilityName
        }`
      );
      try {
        const availabilities = await postSearch(campsiteFinder);
        // returns old campsite finder
        const previousFinder = await updateFinderResults(
          campsiteFinder._id,
          availabilities
        );

        console.log('availabilites', availabilities);
        console.log('previousFinder', previousFinder);

        if (!previousFinder) {
          return;
        }

        const newAvailabilites = differenceWith(
          (newAvail, oldAvail) => newAvail.date === oldAvail.date,
          availabilities || [],
          (previousFinder && previousFinder.datesAvailable) || []
        );

        const newAvailabilitesDifferentThanPreviouslyNonEmpty = differenceWith(
          (newAvail, oldAvail) => newAvail.date === oldAvail.date,
          availabilities || [],
          (previousFinder && previousFinder.mostRecentNonEmptyDatesAvailable) ||
            []
        );

        console.log('newAvailabilities', newAvailabilites);
        console.log(
          'newAvailabilitesDifferentThanPreviouslyNonEmpty',
          newAvailabilitesDifferentThanPreviouslyNonEmpty
        );

        if (
          newAvailabilites.length &&
          newAvailabilitesDifferentThanPreviouslyNonEmpty.length
        ) {
          campsiteFinder.emailAddresses.forEach(emailAddress => {
            console.log('-------------RESERVE CA-------------');
            console.log('sending an email for:', campsiteFinder);
            console.log(
              'previous availabilites were:',
              previousFinder.datesAvailable
            );
            console.log(
              'previous non empty availabilites were:',
              previousFinder.mostRecentNonEmptyDatesAvailable
            );
            console.log('new availabilities are:', newAvailabilites);
            console.log('-------------END RESERVE CA-------------');
            sendEmail(
              emailAddress,
              newAvailabilitesDifferentThanPreviouslyNonEmpty,
              campsiteFinder
            );
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
