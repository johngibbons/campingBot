"use strict";

var _ramda = require("ramda");

var _caSearch = _interopRequireDefault(require("../external/caSearch"));

var _updateFinderResults = _interopRequireDefault(require("./updateFinderResults"));

var _mailer = _interopRequireDefault(require("../mailers/mailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(reserveCaCampsiteFinders) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _ret;

    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log('STARTING RESERVE CA SCRAPE AT:', new Date());
            console.time('RESERVE CA');
            /* eslint-disable-next-line */

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 6;
            _loop =
            /*#__PURE__*/
            regeneratorRuntime.mark(function _loop() {
              var campsiteFinder, availabilities, previousFinder, newAvailabilites;
              return regeneratorRuntime.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      campsiteFinder = _step.value;
                      console.log('----------------------START FOR CA FINDER---------------------');
                      console.log('campsiteFinder:', "".concat(campsiteFinder.campgroundId.placeName, " ").concat(campsiteFinder.campgroundId.facilityName));
                      _context.prev = 3;
                      _context.next = 6;
                      return (0, _caSearch.default)(campsiteFinder);

                    case 6:
                      availabilities = _context.sent;
                      _context.next = 9;
                      return (0, _updateFinderResults.default)(campsiteFinder._id, availabilities);

                    case 9:
                      previousFinder = _context.sent;

                      if (previousFinder) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("return", {
                        v: void 0
                      });

                    case 12:
                      newAvailabilites = (0, _ramda.differenceWith)(function (newAvail, oldAvail) {
                        return newAvail.date === oldAvail.date;
                      }, availabilities || [], previousFinder && previousFinder.datesAvailable || []);

                      if (newAvailabilites.length) {
                        campsiteFinder.emailAddresses.forEach(function (emailAddress) {
                          console.log('-------------RESERVE CA-------------');
                          console.log('sending an email for:', campsiteFinder);
                          console.log('previous availabilites were:', previousFinder.datesAvailable);
                          console.log('new availabilities are:', newAvailabilites);
                          console.log('-------------END RESERVE CA-------------');
                          (0, _mailer.default)(emailAddress, newAvailabilites, campsiteFinder);
                        });
                      }

                      console.log('----------------------END FOR CA FINDER---------------------');
                      _context.next = 20;
                      break;

                    case 17:
                      _context.prev = 17;
                      _context.t0 = _context["catch"](3);
                      console.log('error fetching new availabilities, did not update:', _context.t0);

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop, null, [[3, 17]]);
            });
            _iterator = reserveCaCampsiteFinders[Symbol.iterator]();

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 17;
              break;
            }

            return _context2.delegateYield(_loop(), "t0", 11);

          case 11:
            _ret = _context2.t0;

            if (!(_typeof(_ret) === "object")) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", _ret.v);

          case 14:
            _iteratorNormalCompletion = true;
            _context2.next = 9;
            break;

          case 17:
            _context2.next = 23;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 23:
            _context2.prev = 23;
            _context2.prev = 24;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 26:
            _context2.prev = 26;

            if (!_didIteratorError) {
              _context2.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return _context2.finish(26);

          case 30:
            return _context2.finish(23);

          case 31:
            console.log('RESERVE CA SCRAPE ENDED AT:', new Date());
            console.timeEnd('RESERVE CA');
            _context2.next = 38;
            break;

          case 35:
            _context2.prev = 35;
            _context2.t2 = _context2["catch"](0);
            console.log('RESERVE CA SCRAPING ERROR:', _context2.t2);

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[0, 35], [6, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();