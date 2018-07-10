const postSearch = require('../external/caSearch');
const updateFinderResults = require('./updateFinderResults');
const sendEmail = require('../mailers/mailer');
const { difference } = require('ramda');

module.exports = async reserveCaCampsiteFinders => {
  try {
    console.log('STARTING RESERVE CA SCRAPE AT:', new Date());
    console.time('RESERVE CA');
    /* eslint-disable-next-line */
    for (const campsiteFinder of reserveCaCampsiteFinders) {
      const availabilities = await postSearch(campsiteFinder);
      const updatedFinder = {
        ...campsiteFinder,
        results: availabilities
      };
      // returns old campsite finder
      const previousFinder = await updateFinderResults(updatedFinder);
      const newAvailabilites = difference(
        availabilities || [],
        (previousFinder && previousFinder.datesAvailable) || []
      );
      if (newAvailabilites.length) {
        updatedFinder.emailAddresses.forEach(emailAddress => {
          console.log('sending an email for:', campsiteFinder);
          sendEmail(emailAddress, newAvailabilites, campsiteFinder);
        });
      }
    }
    console.log('RESERVE CA SCRAPE ENDED AT:', new Date());
    console.timeEnd('RESERVE CA');
  } catch (err) {
    console.log('RESERVE CA SCRAPING ERROR:', err);
  }
};
