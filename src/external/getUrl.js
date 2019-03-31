import request from 'request-promise-native';
import Campground from '../models/campground';

export default async campsiteFinder => {
  const campground = campsiteFinder.campgroundId;

  if (campground.url && campground.url.includes('camping')) {
    return new Promise(resolve => resolve(campsiteFinder));
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

  const res = await currRequest(getOptions);
  const updatedCampground = await Campground.findOneAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    { _id: campground._id },
    { url: res.request.uri.href },
    { new: true }
  );

  return { ...campsiteFinder, campgroundId: updatedCampground };
};
