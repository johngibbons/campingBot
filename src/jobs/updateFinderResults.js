const CampsiteFinder = require('../models/campsite-finder');
const moment = require('moment');

module.exports = (_id, datesAvailable = []) =>
  CampsiteFinder.findOneAndUpdate(
    { _id },
    {
      datesAvailable,
      lastCheckedAt: moment()
    }
  ).catch(err => console.log(err));
