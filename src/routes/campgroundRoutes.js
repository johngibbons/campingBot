module.exports = app => {
  const { searchCampgrounds } = require('../controllers/campgroundsController');

  app.route('/campgrounds').get(searchCampgrounds);
};
