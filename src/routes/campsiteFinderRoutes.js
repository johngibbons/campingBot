import {
  listAllCampsiteFinders,
  createCampsiteFinder,
  updateCampsiteFinder,
  deleteCampsiteFinder
} from '../controllers/campsiteFindersController';

export default app => {
  app
    .route('/campsite-finders')
    .get(listAllCampsiteFinders)
    .post(createCampsiteFinder);

  app
    .route('/campsite-finders/:id')
    .put(updateCampsiteFinder)
    .delete(deleteCampsiteFinder);
};
