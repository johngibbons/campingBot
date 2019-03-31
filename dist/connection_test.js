"use strict";

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _from = require("rxjs/observable/from");

var _operators = require("rxjs/operators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  time: true,
  timeout: 3000,
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

var regexp = /UnitDetailPopup(.*?)#39/gi;

var parseAvailable = function parseAvailable(response) {
  return response.match(regexp).filter(function (match) {
    return match.includes('is_available=true') && !match.includes('valign');
  });
};

function searchNextRange(_x, _x2) {
  return _searchNextRange.apply(this, arguments);
}

function _searchNextRange() {
  _searchNextRange = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(placeId, facilityId) {
    var gridResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return request(nextDateOptions);

          case 3:
            _context.next = 5;
            return request(gridOptions(placeId, facilityId));

          case 5:
            gridResponse = _context.sent;
            return _context.abrupt("return", parseAvailable(gridResponse.body.d));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", []);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _searchNextRange.apply(this, arguments);
}

function run(_x3, _x4) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(placeId, facilityId) {
    var allAvailabilities;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return request(sessionOptions);

          case 3:
            _context2.next = 5;
            return request(searchOptions(placeId, facilityId));

          case 5:
            allAvailabilities = (0, _from.from)(new Array(9)).pipe((0, _operators.concatMap)(function () {
              return (0, _from.from)(searchNextRange(placeId, facilityId));
            }), (0, _operators.reduce)(function (all, curr) {
              return [].concat(_toConsumableArray(all), _toConsumableArray(curr));
            }, []), (0, _operators.map)(function (availabilitiesArr) {
              return availabilitiesArr.reduce(function (availabilities, availableSite) {
                var unit = availableSite.match(/unit_id=(.*?)&/)[1];
                var date = availableSite.match(/arrival_date=(.*?)\s/)[1];
                var dateUnits = availabilities[date];

                if (!dateUnits) {
                  // no current availabilites on this date, so add to availabilities obj
                  return _objectSpread({}, availabilities, _defineProperty({}, date, [unit]));
                } else if (dateUnits.includes(unit)) {
                  // duplicate, just return obj
                  return availabilities;
                } // current availabilities already on this date, add unit to date availabilities array


                return _objectSpread({}, availabilities, _defineProperty({}, date, [].concat(_toConsumableArray(availabilities[date]), [unit])));
              }, {});
            }));
            allAvailabilities.subscribe(function (val) {
              return console.log('results', val);
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _run.apply(this, arguments);
}

module.exports = run;