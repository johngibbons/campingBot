"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _campsiteFinder = _interopRequireDefault(require("../models/campsite-finder"));

var _constants = require("../constants");

var _reserveAmericaScraper = _interopRequireDefault(require("./reserveAmericaScraper"));

var _reserveCaScraper = _interopRequireDefault(require("./reserveCaScraper"));

var _setDates = _interopRequireDefault(require("./setDates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var _loop;

  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _loop =
          /*#__PURE__*/
          regeneratorRuntime.mark(function _loop() {
            var allCampsiteFinders, withDates, reserveAmericaCampsiteFinders, reserveCaCampsiteFinders, fiveMinutes;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _campsiteFinder.default.find({
                      isActive: true
                    }).populate('campgroundId');

                  case 2:
                    allCampsiteFinders = _context.sent;
                    withDates = allCampsiteFinders.map(function (campsiteFinder) {
                      return (0, _setDates.default)(campsiteFinder);
                    }).reduce(function (acc, curr) {
                      return [].concat(_toConsumableArray(acc), _toConsumableArray(curr));
                    }, []);
                    reserveAmericaCampsiteFinders = withDates.filter(function (campsiteFinder) {
                      return campsiteFinder.campgroundId.reservationAgency === _constants.RESERVE_AMERICA;
                    });
                    reserveCaCampsiteFinders = withDates.filter(function (campsiteFinder) {
                      return campsiteFinder.campgroundId.reservationAgency === _constants.RESERVE_CA;
                    });
                    _context.next = 8;
                    return (0, _reserveAmericaScraper.default)(reserveAmericaCampsiteFinders);

                  case 8:
                    _context.next = 10;
                    return (0, _reserveCaScraper.default)(reserveCaCampsiteFinders);

                  case 10:
                    fiveMinutes = 5 * 60 * 1000;
                    _context.next = 13;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, fiveMinutes);
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

        case 1:
          if (!(true && !process.env.PAUSE_SCRAPING)) {
            _context2.next = 5;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 3);

        case 3:
          _context2.next = 1;
          break;

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee);
}));

exports.default = _default;