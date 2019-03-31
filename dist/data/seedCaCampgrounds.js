"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _campground = _interopRequireDefault(require("../models/campground"));

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _monet = require("monet");

var _constants = require("../constants");

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var writeFile = _util.default.promisify(_fs.default.writeFile);

var readFile = _util.default.promisify(_fs.default.readFile);

var getSession = function getSession(req) {
  return req({
    url: _constants.URL_RESERVE_CA
  });
};

var allCampgrounds = [];

var requester = function requester(placeId) {
  var jar = _requestPromiseNative.default.jar();

  var headers = {
    'user-agent': _constants.USER_AGENT,
    'content-type': 'application/json'
  };

  var req = _requestPromiseNative.default.defaults({
    jar: jar,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true,
    headers: headers
  });

  var url = "".concat(_constants.URL_RESERVE_CA, "/GetGoogleMapPlaceData");
  var body = {
    googlePlaceSearchParameters: {
      Latitude: '39.6481399536133',
      Longitude: '-123.617057800293',
      Filter: true,
      BackToHome: '',
      ChangeDragandZoom: false,
      BacktoFacility: true,
      ChooseActivity: null,
      IsFilterClick: false,
      AvailabilitySearchParams: {
        RegionId: 0,
        PlaceId: ['0'],
        FacilityId: 0,
        StartDate: '11/15/2017',
        Nights: '1',
        CategoryId: '0',
        UnitTypeIds: [],
        ShowOnlyAdaUnits: false,
        ShowOnlyTentSiteUnits: 'false',
        ShowOnlyRvSiteUnits: 'false',
        MinimumVehicleLength: '0',
        PageIndex: 0,
        PageSize: 20,
        Page1: 20,
        NoOfRecords: 100,
        ShowSiteUnitsName: '0',
        ParkFinder: [],
        ParkCategory: 8,
        ChooseActivity: '1',
        IsPremium: false
      },
      IsFacilityLevel: false,
      PlaceIdFacilityLevel: 0,
      MapboxPlaceid: placeId
    }
  };
  var options = {
    url: url,
    headers: headers,
    body: body
  };
  return getSession(req).then(function () {
    return req.post(options);
  }).catch(function (reason) {
    return console.log('post failed for reason:', reason);
  });
};

function parseFacilities(place) {
  console.log('place is:', place);
  var DisplayName = place.DisplayName,
      PlaceinfoUrl = place.PlaceinfoUrl,
      Fulldescription = place.Fulldescription,
      JsonFacilityInfos = place.JsonFacilityInfos,
      ImageUrl = place.ImageUrl;
  return JsonFacilityInfos.map(function (_ref) {
    var PlaceId = _ref.PlaceId,
        FacilityId = _ref.FacilityId,
        FacilityName = _ref.FacilityName,
        FacilityCategory = _ref.FacilityCategory,
        FacilityBoundryLatitude = _ref.FacilityBoundryLatitude,
        FacilityBoundryLongitude = _ref.FacilityBoundryLongitude;
    return {
      reservationAgency: _constants.RESERVE_CA,
      placeId: PlaceId,
      placeName: DisplayName,
      placeUrl: PlaceinfoUrl,
      placeDescription: Fulldescription,
      placePhoto: ImageUrl,
      facilityPhoto: ImageUrl,
      facilityName: FacilityName,
      facilityId: FacilityId,
      facilityCategory: FacilityCategory,
      latitude: FacilityBoundryLatitude,
      longitude: FacilityBoundryLongitude
    };
  });
}

var handleResponse = function handleResponse(response) {
  return _monet.Maybe.fromNull(response).flatMap(function (maybeResponse) {
    return _monet.Maybe.fromNull(maybeResponse.body.d.ListJsonPlaceInfos);
  }).flatMap(function (placeInfos) {
    return _monet.Maybe.fromNull(placeInfos[0]);
  }).map(parseFacilities).orSome([]);
};

var saveFacility = function saveFacility(placeId) {
  return requester(placeId);
};

var insertMany = function insertMany(arr) {
  console.log('INSERT_MANY_ARR', arr);

  if (arr.length) {
    allCampgrounds = [].concat(_toConsumableArray(allCampgrounds), _toConsumableArray(arr));

    _campground.default.insertMany(arr);
  }
};

var saveCaCampgrounds =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var fileExists, data, parsed, i, response, result, allCampgroundsJson;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return readFile('caCampgrounds.json', 'utf8');

          case 3:
            data = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log('no caCampgrounds, need to scrape');

          case 9:
            if (!data) {
              _context.next = 15;
              break;
            }

            // json file exists, just write it to db
            parsed = JSON.parse(data);
            _context.next = 13;
            return insertMany(parsed);

          case 13:
            _context.next = 31;
            break;

          case 15:
            i = 0;

          case 16:
            if (!(i < 1200)) {
              _context.next = 28;
              break;
            }

            _context.next = 19;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 100);
            });

          case 19:
            _context.next = 21;
            return saveFacility(i);

          case 21:
            response = _context.sent;
            result = handleResponse(response);
            _context.next = 25;
            return insertMany(result);

          case 25:
            i += 1;
            _context.next = 16;
            break;

          case 28:
            allCampgroundsJson = JSON.stringify(allCampgrounds);
            _context.next = 31;
            return writeFile('caCampgrounds.json', allCampgroundsJson, 'utf8');

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function saveCaCampgrounds() {
    return _ref2.apply(this, arguments);
  };
}();

var _default = saveCaCampgrounds;
exports.default = _default;