"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAllDates = exports.generateLengthOfStay = exports.generateDates = exports.fridaysInRange = exports.formatted = exports.nextFriday = exports.daysUntilFriday = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var daysUntilFriday = function daysUntilFriday(startDate) {
  return (0, _moment.default)(startDate).day('Friday').diff((0, _moment.default)(startDate), 'days');
};

exports.daysUntilFriday = daysUntilFriday;

var isInFuture = function isInFuture(date) {
  return (0, _moment.default)(date).diff((0, _moment.default)(), 'days') >= 0;
};

var isValidStart = function isValidStart(date) {
  return (0, _moment.default)(date).diff((0, _moment.default)(), 'days') > 1;
};

var nextFriday = function nextFriday(startDate) {
  var start = startDate;

  if (!isInFuture(start)) {
    start = (0, _moment.default)();
  }

  return daysUntilFriday(start) < 0 ? (0, _moment.default)(start).day('Friday').add(7, 'days') : (0, _moment.default)(start).day('Friday');
};

exports.nextFriday = nextFriday;

var formatted = function formatted(date) {
  return (0, _moment.default)(date, 'M/D/Y').toDate().toDateString();
};

exports.formatted = formatted;

var fridaysInRange = function fridaysInRange() {
  var startDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment.default)();
  var endDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment.default)().add(6, 'months').endOf('month');
  var fridays = [];
  var date = nextFriday(startDate);

  while (date < (0, _moment.default)(endDate)) {
    fridays.push((0, _moment.default)(date));
    date.add(7, 'days');
  }

  return fridays;
};

exports.fridaysInRange = fridaysInRange;

var formatDates = function formatDates(dates) {
  return dates.map(formatted);
};

var generateDates = function generateDates(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate,
      isWeekendsOnly = _ref.isWeekendsOnly,
      dateOption = _ref.dateOption;
  if (dateOption === 'NEXT_SIX_MONTHS') return formatDates(fridaysInRange());

  if (isWeekendsOnly) {
    return formatDates(fridaysInRange(startDate, endDate));
  } else if (isValidStart(startDate)) {
    return [formatted((0, _moment.default)(startDate))];
  }

  return [];
};

exports.generateDates = generateDates;

var generateLengthOfStay = function generateLengthOfStay(_ref2) {
  var startDate = _ref2.startDate,
      endDate = _ref2.endDate,
      isWeekendsOnly = _ref2.isWeekendsOnly,
      dateOption = _ref2.dateOption;
  if (dateOption === 'NEXT_SIX_MONTHS' || isWeekendsOnly) return 2;
  return Math.ceil((0, _moment.default)(endDate).diff((0, _moment.default)(startDate), 'days'));
};

exports.generateLengthOfStay = generateLengthOfStay;

var getWeekendsFromFridays = function getWeekendsFromFridays(fridays) {
  return fridays.reduce(function (all, curr) {
    return [].concat(_toConsumableArray(all), [formatDates([curr, (0, _moment.default)(curr).day('Saturday')])]);
  }, []);
};

var generateAllDates = function generateAllDates(_ref3) {
  var startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      isWeekendsOnly = _ref3.isWeekendsOnly,
      dateOption = _ref3.dateOption;

  if (dateOption === 'NEXT_SIX_MONTHS') {
    return getWeekendsFromFridays(fridaysInRange());
  } else if (isWeekendsOnly) {
    return getWeekendsFromFridays(fridaysInRange(startDate, endDate));
  } else if (isValidStart(startDate)) {
    var allDates = [];
    var currentDate = (0, _moment.default)(startDate);
    var end = (0, _moment.default)(endDate);

    while (currentDate !== end) {
      console.log('currentDate', currentDate);
      console.log('end', end);
      allDates.push(currentDate);
      currentDate = currentDate.add(1, 'day');
    }

    return formatDates(allDates);
  }
};

exports.generateAllDates = generateAllDates;