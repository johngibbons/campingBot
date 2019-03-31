"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _getUrl = _interopRequireDefault(require("../external/getUrl"));

var _postSearch = _interopRequireDefault(require("../external/postSearch"));

var _reserveAmericaParser = _interopRequireDefault(require("./reserveAmericaParser"));

var _mailer = _interopRequireDefault(require("../mailers/mailer"));

var _updateFinderResults = _interopRequireDefault(require("./updateFinderResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(reserveAmericaCampsiteFinders) {
    var campsiteFindersToUpdate, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, campsiteFinder, withUrl, result, siteCount, resultObj, _arr, _loop, _i, _ret, thirtySeconds;

    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log('STARTING RESERVE AMERICA SCRAPE AT:', new Date());
            console.time('RESERVE AMERICA');
            campsiteFindersToUpdate = {};
            /* eslint-disable-next-line no-restricted-syntax */

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 7;
            _iterator = reserveAmericaCampsiteFinders[Symbol.iterator]();

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 25;
              break;
            }

            campsiteFinder = _step.value;
            _context2.next = 13;
            return (0, _getUrl.default)(campsiteFinder);

          case 13:
            withUrl = _context2.sent;
            _context2.next = 16;
            return (0, _postSearch.default)(withUrl);

          case 16:
            result = _context2.sent;
            _context2.next = 19;
            return (0, _reserveAmericaParser.default)(result);

          case 19:
            siteCount = _context2.sent;

            if (!campsiteFindersToUpdate[campsiteFinder._id]) {
              campsiteFindersToUpdate[campsiteFinder._id] = _objectSpread({}, campsiteFinder, {
                results: []
              });
            }

            if (siteCount > 0) {
              resultObj = {
                siteCount: siteCount,
                lengthOfStay: campsiteFinder.lengthOfStay,
                date: campsiteFinder.campingDate
              };

              campsiteFindersToUpdate[campsiteFinder._id].results.push(resultObj);
            }

          case 22:
            _iteratorNormalCompletion = true;
            _context2.next = 9;
            break;

          case 25:
            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 31:
            _context2.prev = 31;
            _context2.prev = 32;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 34:
            _context2.prev = 34;

            if (!_didIteratorError) {
              _context2.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context2.finish(34);

          case 38:
            return _context2.finish(31);

          case 39:
            /* eslint-disable-next-line no-restricted-syntax */
            _arr = Object.values(campsiteFindersToUpdate);
            _loop =
            /*#__PURE__*/
            regeneratorRuntime.mark(function _loop() {
              var toUpdate, previousFinder, newAvailabilites;
              return regeneratorRuntime.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      toUpdate = _arr[_i];
                      _context.next = 3;
                      return (0, _updateFinderResults.default)(toUpdate._id, toUpdate.results);

                    case 3:
                      previousFinder = _context.sent;

                      if (previousFinder) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return", {
                        v: void 0
                      });

                    case 6:
                      newAvailabilites = (0, _ramda.differenceWith)(function (newAvail, oldAvail) {
                        return newAvail.date === oldAvail.date;
                      }, toUpdate.results || [], previousFinder && previousFinder.datesAvailable || []);

                      if (newAvailabilites.length) {
                        toUpdate.emailAddresses.forEach(function (emailAddress) {
                          console.log('-------------RESERVE AMERICA-------------');
                          console.log('sending an email for:', toUpdate);
                          console.log('previous availabilites were:', previousFinder.datesAvailable);
                          console.log('new availabilities are:', newAvailabilites);
                          console.log('-------------END RESERVE AMERICA-------------');
                          (0, _mailer.default)(emailAddress, newAvailabilites, toUpdate);
                        });
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop);
            });
            _i = 0;

          case 42:
            if (!(_i < _arr.length)) {
              _context2.next = 50;
              break;
            }

            return _context2.delegateYield(_loop(), "t1", 44);

          case 44:
            _ret = _context2.t1;

            if (!(_typeof(_ret) === "object")) {
              _context2.next = 47;
              break;
            }

            return _context2.abrupt("return", _ret.v);

          case 47:
            _i++;
            _context2.next = 42;
            break;

          case 50:
            console.log('RESERVE AMERICA SCRAPE ENDED AT:', new Date());
            console.timeEnd('RESERVE AMERICA');
            _context2.next = 60;
            break;

          case 54:
            _context2.prev = 54;
            _context2.t2 = _context2["catch"](0);
            console.log('RESERVE AMERICA SCRAPING ERROR:', _context2.t2);
            thirtySeconds = 30 * 1000; // wait 30 seconds before trying again

            _context2.next = 60;
            return new Promise(function (resolve) {
              return setTimeout(resolve, thirtySeconds);
            });

          case 60:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[0, 54], [7, 27, 31, 39], [32,, 34, 38]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;