"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$campgroundId, url, contractCode, facilityId, campingDate, lengthOfStay, jar, headers, currRequest, getOptions, postOptions;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$campgroundId = _ref.campgroundId, url = _ref$campgroundId.url, contractCode = _ref$campgroundId.contractCode, facilityId = _ref$campgroundId.facilityId, campingDate = _ref.campingDate, lengthOfStay = _ref.lengthOfStay;
            jar = _requestPromiseNative.default.jar();
            headers = {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
              Connection: 'keep-alive'
            };
            currRequest = _requestPromiseNative.default.defaults({
              jar: jar,
              headers: headers,
              followRedirect: true,
              resolveWithFullResponse: true,
              timeout: 5000
            });
            getOptions = {
              url: url,
              method: 'GET'
            };
            postOptions = {
              method: 'POST',
              uri: url,
              form: {
                contractCode: contractCode,
                parkId: facilityId,
                siteTypeFilter: 'ALL',
                submitSiteForm: true,
                search: 'site',
                lookingFor: 2003,
                campingDate: campingDate,
                lengthOfStay: lengthOfStay,
                camping_2003_3012: 4,
                contractDefaultMaxWindow: 'MS:24,LT:18,GA:24,SC:13,PA:24,LARC:24,CTLN:13',
                stateDefaultMaxWindow: 'MS:24,GA:24,SC:13,PA:24,CO:24,CA:13'
              }
            };
            _context.next = 8;
            return currRequest(getOptions);

          case 8:
            return _context.abrupt("return", currRequest(postOptions));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;