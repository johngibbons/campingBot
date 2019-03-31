"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _datesGenerator = require("./datesGenerator");

var _constants = require("../constants");

var _default = function _default(campsiteFinder) {
  if (campsiteFinder.campgroundId.reservationAgency === _constants.RESERVE_AMERICA) {
    var _campsiteFinderObj = campsiteFinder.toObject();

    var dates = (0, _datesGenerator.generateDates)(campsiteFinder);
    var lengthOfStay = (0, _datesGenerator.generateLengthOfStay)(campsiteFinder);
    return dates.map(function (campingDate) {
      return Object.assign({}, _campsiteFinderObj, {
        campingDate: campingDate,
        lengthOfStay: lengthOfStay
      });
    });
  }

  var campsiteFinderObj = campsiteFinder.toObject();
  var allDates = (0, _datesGenerator.generateAllDates)(campsiteFinder);
  return [Object.assign({}, campsiteFinderObj, {
    allDates: allDates
  })];
};

exports.default = _default;