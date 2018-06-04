const { Observable } = require('rx');
const postSearch = require('../external/caSearch');
const updateFinderResults = require('./updateFinderResults');

module.exports = async reserveCaCampsiteFinders => {
  try {
    console.log('STARTING RESERVE CA SCRAPE AT:', new Date());
    console.time('RESERVE CA');
    for (const campsiteFinder of reserveCaCampsiteFinders) {
      const availabilities = await postSearch(campsiteFinder);
      const updatedFinder = {
        ...campsiteFinder,
        results: availabilities
      };
      await updateFinderResults([updatedFinder]);
    }
    console.log('RESERVE CA SCRAPE ENDED AT:', new Date());
    console.timeEnd('RESERVE CA');
  } catch (err) {
    console.log('RESERVE CA SCRAPING ERROR:', err);
  }
};
