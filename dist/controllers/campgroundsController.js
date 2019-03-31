"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchCampgrounds = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Campground = _mongoose.default.model('Campgrounds'); // eslint-disable-next-line import/prefer-default-export


var searchCampgrounds =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var campgrounds;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Campground.find({
              placeName: {
                $regex: "".concat(req.query.q),
                $options: 'i'
              }
            });

          case 3:
            campgrounds = _context.sent;
            res.json(campgrounds);
            /*
            const uniqueCampgrounds = campgrounds.reduce((acc, campground) => {
              const campgroundName = campground.facilityName
                .toLowerCase()
                .split(" ")
                .join("_");
              if (
                !acc[campgroundName] ||
                (acc[campgroundName].reservationAgency === RESERVE_AMERICA &&
                  campground.reservationAgency === RESERVE_CA)
              ) {
                // replace reserve america campground with reserve ca campground if both match
                acc[campgroundName] = campground;
              }
               return acc;
            }, {});
             const results = Object.values(uniqueCampgrounds);
             return res.json(results);
            */

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.send(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function searchCampgrounds(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.searchCampgrounds = searchCampgrounds;