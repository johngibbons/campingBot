"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _campgroundsController = require("../controllers/campgroundsController");

var _default = function _default(app) {
  app.route('/campgrounds').get(_campgroundsController.searchCampgrounds);
};

exports.default = _default;