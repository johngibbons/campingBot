const Campground = require('../models/campground')
const { Observable } = require('rx')

module.exports = Observable.fromPromise(Campground.remove({})).finally(() =>
  console.log('successfully deleted campgrounds')
)
