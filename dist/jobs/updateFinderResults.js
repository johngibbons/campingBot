"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _campsiteFinder = _interopRequireDefault(require("../models/campsite-finder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_id) {
  var datesAvailable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _campsiteFinder.default.findOneAndUpdate({
    _id: _id
  }, {
    datesAvailable: datesAvailable,
    lastCheckedAt: (0, _moment.default)()
  }).catch(function (err) {
    return console.log(err);
  });
};

exports.default = _default;