module.exports = app => {
  const {
    listAllCampsiteFinders,
    createCampsiteFinder,
    updateCampsiteFinder,
    deleteCampsiteFinder
  } = require('../controllers/campsiteFindersController')

  app
    .route('/campsite-finders')
    .get(listAllCampsiteFinders)
    .post(createCampsiteFinder)

  app
    .route('/campsite-finders/:id')
    .put(updateCampsiteFinder)
    .delete(deleteCampsiteFinder)
}
