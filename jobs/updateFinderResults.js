const CampsiteFinder = require('../models/campsite-finder')

module.exports = results => {
  results.map(campsiteFinder => {
    CampsiteFinder.findOneAndUpdate(
      { _id: campsiteFinder._id },
      { datesAvailable: campsiteFinder.results },
      { new: true }
    )
      .then(c => console.log(c))
      .catch(err => console.log(err))
  })
}
