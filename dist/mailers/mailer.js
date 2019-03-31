"use strict";

var _path = _interopRequireDefault(require("path"));

var _emailTemplates = require("email-templates");

var _fs = _interopRequireDefault(require("fs"));

var _sendgrid = _interopRequireWildcard(require("sendgrid"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sg = (0, _sendgrid.default)(process.env.SENDGRID_API_KEY);

var templateDir = _path.default.join(__dirname, 'templates', 'daily-update');

var template = new _emailTemplates.EmailTemplate(templateDir);

module.exports =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(emailAddress, newAvailabilities, campsiteFinder) {
    var email;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return template.render({
              campsiteFinder: campsiteFinder,
              newAvailabilities: newAvailabilities
            }, function (err, results) {
              var fromEmail = new _sendgrid.mail.Email('john@campsitefinder.com');
              var toEmail = new _sendgrid.mail.Email(emailAddress);
              var subject = "New Availabilities at ".concat(campsiteFinder.campgroundId.placeName, " ").concat(campsiteFinder.campgroundId.facilityName);
              var content = new _sendgrid.mail.Content('text/html', results.html);
              var emailObj = new _sendgrid.mail.Mail(fromEmail, subject, toEmail, content);
              var request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: emailObj.toJSON()
              });
              sg.API(request, function (error, response) {
                if (error) {
                  console.log('Error response received');
                }

                console.log(response.statusCode);
                console.log(response.body);
                console.log(response.headers);
              });
            });

          case 3:
            email = _context.sent;

            _fs.default.writeFileSync('preview.html', email.html);

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Error sending email:', _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();