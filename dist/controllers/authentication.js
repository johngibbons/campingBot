"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _mongoose.default.model('Users');

var register =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, res) {
    var _ref$body, email, password, BCRYPT_SALT_ROUNDS, hashedPassword;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$body = _ref.body, email = _ref$body.email, password = _ref$body.password;
            _context.prev = 1;
            BCRYPT_SALT_ROUNDS = 12;
            _context.next = 5;
            return _bcrypt.default.hash(password, BCRYPT_SALT_ROUNDS);

          case 5:
            hashedPassword = _context.sent;
            _context.next = 8;
            return new User({
              email: email,
              password: hashedPassword
            });

          case 8:
            res.send();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.send(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function register(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.register = register;

var login =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, email, password, user, correctPassword, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.prev = 1;
            _context2.next = 4;
            return User.findOne({
              email: email
            });

          case 4:
            user = _context2.sent;
            _context2.next = 7;
            return _bcrypt.default.compare(password, user.password);

          case 7:
            correctPassword = _context2.sent;

            if (correctPassword) {
              token = _jsonwebtoken.default.sign({
                id: user._id
              }, req.app.get('secretKey'), {
                expiresIn: '1h'
              });
              res.send({
                user: user,
                token: token
              });
            } else {
              res.send('Username or password incorrect.');
            }

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.send('Username or password incorrect.');

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function login(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = login;