const getUrl = require('../external/getUrl');
const postSearch = require('../external/postSearch');
const parse = require('./reserveAmericaParser');
const sendEmails = require('../mailers/mailer');
const updateFinderResults = require('./updateFinderResults');
const { difference } = require('ramda');

module.exports = async reserveAmericaCampsiteFinders => {
  try {
    console.log('STARTING RESERVE AMERICA SCRAPE AT:', new Date());
    console.time('RESERVE AMERICA');
    const campsiteFindersToUpdate = {};
    /* eslint-disable-next-line no-restricted-syntax */
    for (const campsiteFinder of reserveAmericaCampsiteFinders) {
      const withUrl = await getUrl(campsiteFinder);
      const result = await postSearch(withUrl);
      const siteCount = await parse(result);

      if (!campsiteFindersToUpdate[campsiteFinder._id]) {
        campsiteFindersToUpdate[campsiteFinder._id] = {
          ...campsiteFinder,
          results: []
        };
      }

      if (siteCount > 0) {
        const resultObj = {
          siteCount,
          lengthOfStay: campsiteFinder.lengthOfStay,
          date: campsiteFinder.campingDate
        };

        campsiteFindersToUpdate[campsiteFinder._id].results.push(resultObj);
      }
    }
    /* eslint-disable-next-line no-restricted-syntax */
    for (const toUpdate of Object.values(campsiteFindersToUpdate)) {
      // returns old campsite finder
      const previousFinder = await updateFinderResults(toUpdate);
      const newAvailabilites = difference(
        toUpdate.results || [],
        (previousFinder && previousFinder.datesAvailable) || []
      );
      if (newAvailabilites.length) {
        toUpdate.emailAddresses.forEach(emailAddress => {
          console.log('sending an email');
          sendEmail(emailAddress, newAvailabilites, toUpdate);
        });
      }
    }

    console.log('RESERVE AMERICA SCRAPE ENDED AT:', new Date());
    console.timeEnd('RESERVE AMERICA');
  } catch (err) {
    console.log('RESERVE AMERICA SCRAPING ERROR:', err);
    const thirtySeconds = 30 * 1000;
    // wait 30 seconds before trying again
    await new Promise(resolve => setTimeout(resolve, thirtySeconds));
  }
};
