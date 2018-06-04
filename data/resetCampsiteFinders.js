const CampsiteFinder = require('../models/campsite-finder');

module.exports = async () => {
  await CampsiteFinder.remove({});
  console.log('successfully deleted finders');
};
