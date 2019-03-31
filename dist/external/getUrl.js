"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _campground = _interopRequireDefault(require("../models/campground"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(campsiteFinder) {
    var campground, jar, headers, currRequest, getOptions, res, updatedCampground;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            campground = campsiteFinder.campgroundId;

            if (!(campground.url && campground.url.includes('camping'))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", new Promise(function (resolve) {
              return resolve(campsiteFinder);
            }));

          case 3:
            jar = _requestPromiseNative.default.jar();
            headers = {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
            };
            currRequest = _requestPromiseNative.default.defaults({
              jar: jar,
              headers: headers,
              followRedirect: true,
              resolveWithFullResponse: true
            });
            getOptions = {
              method: 'GET',
              uri: "http://www.reserveamerica.com/campsiteSearch.do?contractCode=".concat(campground.contractCode, "&parkId=").concat(campground.facilityId)
            };
            _context.next = 9;
            return currRequest(getOptions);

          case 9:
            res = _context.sent;
            _context.next = 12;
            return _campground.default.findOneAndUpdate( // eslint-disable-next-line no-underscore-dangle
            {
              _id: campground._id
            }, {
              url: res.request.uri.href
            }, {
              new: true
            });

          case 12:
            updatedCampground = _context.sent;
            return _context.abrupt("return", _objectSpread({}, campsiteFinder, {
              campgroundId: updatedCampground
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;