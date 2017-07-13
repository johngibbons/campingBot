const mongoose = require('mongoose')
const Campground = mongoose.model('Campgrounds')

exports.searchCampgrounds = (req, res) => {
  Campground.find({
    facilityName: { $regex: `${req.query.q}`, $options: 'i' }
  })
    .then(campgrounds => res.json(campgrounds))
    .catch(err => res.send(err))
}
