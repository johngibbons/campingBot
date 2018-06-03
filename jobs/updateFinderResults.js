const CampsiteFinder = require("../models/campsite-finder");
const moment = require("moment");

module.exports = results => {
  results.map(campsiteFinder => {
    console.log("updating campsiteFinder", campsiteFinder);
    CampsiteFinder.findOneAndUpdate(
      { _id: campsiteFinder._id },
      {
        datesAvailable: campsiteFinder.results,
        lastCheckedAt: moment()
      },
      { new: true }
    )
      .then(c => console.log(c))
      .catch(err => console.log(err));
  });
};
