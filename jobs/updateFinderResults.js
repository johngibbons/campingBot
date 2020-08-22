const CampsiteFinder = require('../models/campsite-finder');
const moment = require('moment');

module.exports = (_id, datesAvailable = []) => {
  const lastCheckedAt = moment();
  const updateObject = datesAvailable.length
    ? {
        datesAvailable,
        mostRecentNonEmptyDatesAvailable: datesAvailable,
        lastCheckedAt
      }
    : { datesAvailable, lastCheckedAt };

  return CampsiteFinder.findOneAndUpdate({ _id }, updateObject).catch(err =>
    console.log(err)
  );
};
