const request = require('request-promise-native');
const Campground = require('../models/campground');

module.exports = campsiteFinder => {
  const campground = campsiteFinder.campgroundId;
  console.log('campground', campground);
  if (campground.url && campground.url.includes('camping')) {
    return new Promise((resolve, reject) => resolve(campsiteFinder));
  }
  const jar = request.jar();
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
  };

  const currRequest = request.defaults({
    jar,
    headers,
    followRedirect: true,
    resolveWithFullResponse: true
  });

  const getOptions = {
    method: 'GET',
    uri: `http://www.reserveamerica.com/campsiteSearch.do?contractCode=${
      campground.contractCode
    }&parkId=${campground.facilityId}`
  };

  return currRequest(getOptions)
    .then(res => {
      return Campground.findOneAndUpdate(
        { _id: campground._id },
        { url: res.request.headers.referer },
        { new: true }
      );
    })
    .then(campground => {
      campsiteFinder.campgroundId = campground;
      return campsiteFinder;
    });
};
