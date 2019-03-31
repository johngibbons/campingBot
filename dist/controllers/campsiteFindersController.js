"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCampsiteFinder = exports.updateCampsiteFinder = exports.createCampsiteFinder = exports.listAllCampsiteFinders = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CampsiteFinder = _mongoose.default.model('CampsiteFinders');

var listAllCampsiteFinders = function listAllCampsiteFinders(req, res) {
  CampsiteFinder.find({}).populate('campgroundId').then(function (campsiteFinders) {
    return res.json(campsiteFinders);
  }).catch(function (err) {
    return res.send(err);
  });
};

exports.listAllCampsiteFinders = listAllCampsiteFinders;

var createCampsiteFinder =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var campsiteFinder;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return new CampsiteFinder(req.body).save();

          case 3:
            campsiteFinder = _context.sent;
            res.json(campsiteFinder);
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

  return function createCampsiteFinder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCampsiteFinder = createCampsiteFinder;

var updateCampsiteFinder =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var campsiteFinder;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.emailAddresses) {
              req.body.emailAddresses = JSON.parse(req.body.emailAddresses);
            }

            _context2.prev = 1;
            _context2.next = 4;
            return CampsiteFinder.findOneAndUpdate({
              _id: req.params.id
            }, req.body, {
              new: true
            });

          case 4:
            campsiteFinder = _context2.sent;
            res.json(campsiteFinder);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.send(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function updateCampsiteFinder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateCampsiteFinder = updateCampsiteFinder;

var deleteCampsiteFinder =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return CampsiteFinder.remove({
              _id: req.params.id
            });

          case 3:
            res.json({
              message: 'successfully deleted'
            });
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            res.send(_context3.t0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function deleteCampsiteFinder(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteCampsiteFinder = deleteCampsiteFinder;