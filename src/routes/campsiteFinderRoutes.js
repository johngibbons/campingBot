import {
  listAllCampsiteFinders,
  createCampsiteFinder,
  updateCampsiteFinder,
  deleteCampsiteFinder
} from '../controllers/campsiteFindersController';
import verifyToken from '../auth/verify-token';

export default app => {
  app
    .route('/campsite-finders')
    .get(verifyToken, listAllCampsiteFinders)
    .post(verifyToken, createCampsiteFinder);

  app
    .route('/campsite-finders/:id')
    .put(verifyToken, updateCampsiteFinder)
    .delete(verifyToken, deleteCampsiteFinder);
};
