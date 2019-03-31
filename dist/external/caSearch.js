"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _moment = _interopRequireDefault(require("moment"));

var _datesGenerator = require("../jobs/datesGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36'
};

var jar = _requestPromiseNative.default.jar();

var request = _requestPromiseNative.default.defaults({
  jar: jar,
  headers: headers,
  simple: false,
  followRedirect: false,
  resolveWithFullResponse: true,
  timeout: 5000,
  forever: true,
  json: true
});

var sessionOptions = {
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx'
};

var searchOptions = function searchOptions(placeId, facilityId) {
  return {
    url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx',
    method: 'POST',
    body: {
      ctl01$AdvanceMainSearch$hdnArrivalDate: '03/14/2018',
      ctl01$AdvanceMainSearch$txtArrivalDate: '03/14/2018',
      ctl01$AdvanceMainSearch$hdnNights: 1,
      ctl01$AdvanceMainSearch$ddlNights: 1,
      ctl01$mainContent$hdnUnitTotalDay: 6,
      ctl01$mainContent$btngetFacilitiess: 'Hure',
      ctl01$mainContent$hdnCheckListDatalistmode: 1,
      ctl01$mainContent$Hidscreenresolution: 1280,
      ctl01$mainContent$hdnPlaceid: placeId,
      ctl01$mainContent$hdnPlaceFacilirySize: 'Medium',
      ctl01$mainContent$hdnFacilityid: facilityId,
      ctl01$mainContent$hdnFacilityType: 1,
      ctl01$mainContent$hdnNodeclick: 0,
      ctl01$mainContent$hiddenPlaceLevel: 'Facility',
      ctl01$mainContent$txtDateRange: '11/28/2017',
      ctl01$mainContent$Grid_ddlNights: 1,
      ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory: 1,
      ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate: '03/14/2018',
      ctl01$mainContent$TopMenuMainSearch$ddlTopNights: 1,
      ctl01$mainContent$TopMenuMainSearch$ddlSortBy: 3
    }
  };
};

var gridOptions = function gridOptions(placeId, facilityId) {
  return {
    headers: {
      'content-type': 'application/json'
    },
    url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetUnitGridDataHtmlString',
    method: 'POST',
    body: {
      FacilityId: facilityId,
      PlaceId: placeId,
      MaximumDates: '20',
      IsTablet: true,
      MaximumStayforGrid: 30
    }
  };
};

var nextDateOptions = {
  headers: {
    'content-type': 'application/json'
  },
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetNextDateUnitGrid',
  method: 'POST',
  body: {
    unitsizebool: true,
    unitclicsizechangevalue: true
  }
}; // UnitDetailPopup.aspx?facility_id=346
// \u0026amp;unit_id=4528
// \u0026amp;arrival_date=8/29/2017 12:00:00 AM
// \u0026amp;dis=8/29/2017 12:00:00 AM
// \u0026amp;is_available=true
// \u0026#39;,
// \u0026#39;4528
// \u0026#39;,
// \u0026#39;8/29/2017
// \u0026#39;,
// \u0026#39;0
// \u0026#39;,
// \u0026#39;0
// \u0026#39;
// );\"

var parseAvailable = function parseAvailable($, sites) {
  // filter out ADA sites and walk ins
  var nonAdaOrWalkIn = sites.not(':has(.hendi_icn)').not(':has(.green_brd_box)');
  var nestedMatches = nonAdaOrWalkIn.map(function (i, el) {
    var matches = $(el).children().map(function (j, child) {
      return $(child).attr('onclick');
    }).filter(function (j, str) {
      return str.includes('is_available=true') && !str.includes('valign');
    }).toArray();
    return matches;
  }).toArray();
  return nestedMatches;
};

var getGridResults =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(placeId, facilityId, startDate, endDate) {
    var gridResponse, $, sites;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return request(gridOptions(placeId, facilityId));

          case 3:
            gridResponse = _context.sent;

            if (!gridResponse.body.d) {
              console.log('CA search did not return proper response, it was:', gridResponse.body);
            }

            $ = _cheerio.default.load(gridResponse.body.d);
            sites = $('.unitdata');
            return _context.abrupt("return", {
              startDate: startDate,
              endDate: endDate,
              result: parseAvailable($, sites)
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log('error requesting grid options:', _context.t0);
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getGridResults(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var searchNextRange =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(placeId, facilityId) {
    var response, _response$body$d$spli, _response$body$d$spli2, startDate, endDate;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return request(nextDateOptions);

          case 3:
            response = _context2.sent;
            _response$body$d$spli = response.body.d.split(' - '), _response$body$d$spli2 = _slicedToArray(_response$body$d$spli, 2), startDate = _response$body$d$spli2[0], endDate = _response$body$d$spli2[1];
            return _context2.abrupt("return", getGridResults(placeId, facilityId, startDate, endDate));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log('error requesting next dates:', _context2.t0);
            throw _context2.t0;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function searchNextRange(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var hasAllRequestedDates = function hasAllRequestedDates(requested, available) {
  return requested.every(function (requestedDate) {
    return available.indexOf(requestedDate) > -1;
  });
};

var buildAvailabilitiesArray =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(placeId, facilityId, allDates) {
    var _ref4, initialResult, lastDateChecked, availabilitiesArr, lastDateToCheck, _ref5, startDate, endDate, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getGridResults(placeId, facilityId);

          case 2:
            _ref4 = _context3.sent;
            initialResult = _ref4.result;
            lastDateChecked = (0, _moment.default)();
            availabilitiesArr = [];
            lastDateToCheck = (0, _moment.default)().add(6, 'months').day(-2);
            availabilitiesArr.push.apply(availabilitiesArr, _toConsumableArray(initialResult));

          case 8:
            if (!lastDateChecked.isSameOrBefore(lastDateToCheck)) {
              _context3.next = 34;
              break;
            }

            _context3.next = 11;
            return searchNextRange(placeId, facilityId);

          case 11:
            _ref5 = _context3.sent;
            startDate = _ref5.startDate;
            endDate = _ref5.endDate;
            result = _ref5.result;
            availabilitiesArr.push.apply(availabilitiesArr, _toConsumableArray(result));
            console.log('--------------CYCLE------------------');
            console.log('startDate is:', startDate);
            console.log('endDate is:', endDate);
            console.log('lastDateChecked is:', lastDateChecked);

            if (endDate) {
              _context3.next = 22;
              break;
            }

            throw new Error('No endDate');

          case 22:
            if (!endDate) {
              _context3.next = 26;
              break;
            }

            lastDateChecked = (0, _moment.default)(endDate, 'M/D/Y');
            _context3.next = 30;
            break;

          case 26:
            _context3.next = 28;
            return request(sessionOptions);

          case 28:
            _context3.next = 30;
            return request(searchOptions(placeId, facilityId));

          case 30:
            console.log('--------------END OF CYCLE------------------');
            sleep(1000);
            _context3.next = 8;
            break;

          case 34:
            console.log('lastDateToCheck', lastDateToCheck);
            return _context3.abrupt("return", availabilitiesArr);

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function buildAvailabilitiesArray(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _default =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref6) {
    var _ref6$campgroundId, placeId, facilityId, allDates, availabilitiesArr, availableDatesByUnit, availabilities;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref6$campgroundId = _ref6.campgroundId, placeId = _ref6$campgroundId.placeId, facilityId = _ref6$campgroundId.facilityId, allDates = _ref6.allDates;
            _context4.prev = 1;
            _context4.next = 4;
            return request(sessionOptions);

          case 4:
            _context4.next = 10;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](1);
            console.log('error requesting session:', _context4.t0);
            throw _context4.t0;

          case 10:
            _context4.prev = 10;
            _context4.next = 13;
            return request(searchOptions(placeId, facilityId));

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t1 = _context4["catch"](10);
            console.log('error requesting search:', _context4.t1);
            throw _context4.t1;

          case 19:
            _context4.next = 21;
            return buildAvailabilitiesArray(placeId, facilityId, allDates);

          case 21:
            availabilitiesArr = _context4.sent;
            availableDatesByUnit = availabilitiesArr.reduce(function (availabilities, availableSite) {
              var unit = availableSite.match(/unit_id=(.*?)&/)[1];
              var date = availableSite.match(/arrival_date=(.*?)\s/)[1];
              var formattedDate = (0, _datesGenerator.formatted)(date);
              var unitDates = availabilities[unit];

              if (!unitDates) {
                // no previous availabilites on this unit, so add to availabilities obj
                return _objectSpread({}, availabilities, _defineProperty({}, unit, [formattedDate]));
              } else if (unitDates.includes(formattedDate)) {
                // duplicate, just return obj
                return availabilities;
              } // previous availabilities already on this unit, add date to unit availabilities array


              return _objectSpread({}, availabilities, _defineProperty({}, unit, [].concat(_toConsumableArray(availabilities[unit]), [formattedDate])));
            }, {});
            availabilities = allDates.map(function (requestedDatesArr) {
              var matchingUnits = Object.keys(availableDatesByUnit).filter(function (unitId) {
                return hasAllRequestedDates(requestedDatesArr, availableDatesByUnit[unitId]);
              });
              return {
                date: requestedDatesArr[0],
                siteCount: matchingUnits.length,
                lengthOfStay: requestedDatesArr.length
              };
            }).filter(function (resultObj) {
              return resultObj.siteCount !== 0;
            });
            return _context4.abrupt("return", availabilities);

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 6], [10, 15]]);
  }));

  return function (_x10) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = _default;