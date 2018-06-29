const CampsiteFinder = require('../models/campsite-finder');
const moment = require('moment');

module.exports = campsiteFinder =>
  CampsiteFinder.findOneAndUpdate(
    { _id: campsiteFinder._id },
    {
      datesAvailable: campsiteFinder.results,
      lastCheckedAt: moment()
    }
  ).catch(err => console.log(err));
