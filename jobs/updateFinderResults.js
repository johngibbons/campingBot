const CampsiteFinder = require('../models/campsite-finder');
const moment = require('moment');

module.exports = results => {
  results.map(campsiteFinder => {
    CampsiteFinder.findOneAndUpdate(
      { _id: campsiteFinder._id },
      {
        datesAvailable: campsiteFinder.results,
        lastCheckedAt: moment()
      },
      { new: true }
    ).catch(err => console.log(err));
  });
};
