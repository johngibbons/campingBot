const getUrl = require('../external/getUrl');
const postSearch = require('../external/postSearch');
const parse = require('./reserveAmericaParser');
const sendEmails = require('../mailers/mailer');
const updateFinderResults = require('./updateFinderResults');

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
      if (siteCount > 0) {
        const resultObj = {
          siteCount,
          lengthOfStay: campsiteFinder.lengthOfStay,
          date: campsiteFinder.campingDate
        };
        const existingFinderToUpdate =
          campsiteFindersToUpdate[campsiteFinder._id];

        if (existingFinderToUpdate) {
          existingFinderToUpdate.results.push(resultObj);
        } else {
          campsiteFindersToUpdate[campsiteFinder._id] = {
            ...campsiteFinder,
            results: [resultObj]
          };
        }
      }
    }
    /* eslint-disable-next-line no-restricted-syntax */
    for (const toUpdate of Object.values(campsiteFindersToUpdate)) {
      await updateFinderResults(toUpdate);
    }
    console.log('RESERVE AMERICA SCRAPE ENDED AT:', new Date());
    console.timeEnd('RESERVE AMERICA');
  } catch (err) {
    console.log('RESERVE AMERICA SCRAPING ERROR:', err);
    const thirtySeconds = 30 * 1000;
    await new Promise(resolve => setTimeout(resolve, thirtySeconds));
  }
};
