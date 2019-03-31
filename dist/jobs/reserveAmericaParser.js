"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scrapeIt = _interopRequireDefault(require("scrape-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(response) {
  if (!response) return 0;

  var data = _scrapeIt.default.scrapeHTML(response.body, {
    campsites: {
      listItem: '#shoppingitems tr',
      data: {
        availIcon: '.sitemarker',
        unavailIcon: '.sitemarker.unavail',
        bookNowButton: '.book.now',
        bookNext: '.next',
        adaIcon: {
          selector: 'img[alt="Accessible"]',
          attr: 'src'
        }
      }
    }
  });

  var avail = data.campsites.filter(function (_ref) {
    var availIcon = _ref.availIcon,
        unavailIcon = _ref.unavailIcon,
        bookNowButton = _ref.bookNowButton,
        adaIcon = _ref.adaIcon,
        bookNext = _ref.bookNext;
    return !!bookNowButton && !!availIcon && !unavailIcon && !adaIcon && !bookNext;
  });
  return avail.length;
};

exports.default = _default;