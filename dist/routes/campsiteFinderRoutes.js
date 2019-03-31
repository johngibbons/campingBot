"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _campsiteFindersController = require("../controllers/campsiteFindersController");

var _default = function _default(app) {
  app.route('/campsite-finders').get(_campsiteFindersController.listAllCampsiteFinders).post(_campsiteFindersController.createCampsiteFinder);
  app.route('/campsite-finders/:id').put(_campsiteFindersController.updateCampsiteFinder).delete(_campsiteFindersController.deleteCampsiteFinder);
};

exports.default = _default;