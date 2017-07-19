const CampsiteFinder = require('../models/campsite-finder')

module.exports = results => {
  console.log(results)
  results.map(campsiteFinder => {
    console.log(campsiteFinder)
    CampsiteFinder.findOneAndUpdate(
      { _id: campsiteFinder._id },
      { datesAvailable: campsiteFinder.results },
      { new: true }
    )
      .then(c => console.log(c))
      .catch(err => console.log(err))
  })
}
