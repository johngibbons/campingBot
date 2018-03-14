const CampsiteFinder = require('../models/campsite-finder')
const { Observable } = require('rx')

module.exports = Observable.fromPromise(CampsiteFinder.remove({})).finally(() =>
  console.log('successfully deleted finders')
)
