import { searchCampgrounds } from '../controllers/campgroundsController';

export default app => {
  app.route('/campgrounds').get(searchCampgrounds);
};
