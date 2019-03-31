"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _xml2js = _interopRequireDefault(require("xml2js"));

var _path = _interopRequireDefault(require("path"));

var _ramda = require("ramda");

var _campground = _interopRequireDefault(require("../models/campground"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readFile = _util.default.promisify(_fs.default.readFile);

var parser = _util.default.promisify(new _xml2js.default.Parser().parseString);

var renameKeys = (0, _ramda.curry)(function (keysMap, obj) {
  return (0, _ramda.reduce)(function (acc, key) {
    return (0, _ramda.assoc)(keysMap[key] || key, keysMap[key] === 'facilityPhoto' ? "http://reserveamerica.com".concat(obj[key]) : obj[key], acc);
  }, {}, (0, _ramda.keys)(obj));
});
var keysMap = {
  facilityName: 'placeName',
  facilityID: 'facilityId',
  faciltyPhoto: 'facilityPhoto',
  contractID: 'contractCode'
};

var addAgency = function addAgency(obj) {
  return Object.assign({}, obj, {
    reservationAgency: _constants.RESERVE_AMERICA
  });
};

var mapToDb = function mapToDb(r) {
  return (0, _ramda.pipe)(renameKeys(keysMap), addAgency)(r.$);
}; // seed campgrounds from xml file


var seedCampgrounds =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var data, parseString, dataForDb;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile(_path.default.resolve('data/allCampgrounds.xml'), 'utf8');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return parser(data);

          case 5:
            parseString = _context.sent;
            dataForDb = parseString.resultset.result.map(mapToDb);
            _context.next = 9;
            return _campground.default.insertMany(dataForDb);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function seedCampgrounds() {
    return _ref.apply(this, arguments);
  };
}();

var _default = seedCampgrounds;
exports.default = _default;