"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _seedCampgrounds = _interopRequireDefault(require("./seedCampgrounds"));

var _seedCaCampgrounds = _interopRequireDefault(require("./seedCaCampgrounds"));

var _resetCampgrounds = _interopRequireDefault(require("./resetCampgrounds"));

var _constants = require("../constants");

var _campground = _interopRequireDefault(require("../models/campground"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var count, amCount, totalCount;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _resetCampgrounds.default)();

        case 3:
          _context.next = 5;
          return (0, _seedCampgrounds.default)();

        case 5:
          _context.next = 7;
          return (0, _seedCaCampgrounds.default)();

        case 7:
          _context.next = 9;
          return _campground.default.count({
            reservationAgency: _constants.RESERVE_CA
          });

        case 9:
          count = _context.sent;
          console.log("done seeding ".concat(count, " California campgrounds"));
          _context.next = 13;
          return _campground.default.count({
            reservationAgency: _constants.RESERVE_AMERICA
          });

        case 13:
          amCount = _context.sent;
          console.log("done seeding ".concat(amCount, " American campgrounds"));
          _context.next = 17;
          return _campground.default.count({});

        case 17:
          totalCount = _context.sent;
          console.log("done seeding ".concat(totalCount, " total campgrounds"));
          _context.next = 24;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.log('error seeding campgrounds', _context.t0);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 21]]);
}));

exports.default = _default;