"use strict";

var _dotenv = require("dotenv");

require("newrelic");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _campsiteScraper = _interopRequireDefault(require("./jobs/campsiteScraper"));

var _seedAllCampgrounds = _interopRequireDefault(require("./data/seedAllCampgrounds"));

var _resetCampsiteFinders = _interopRequireDefault(require("./data/resetCampsiteFinders"));

var _campsiteFinderRoutes = _interopRequireDefault(require("./routes/campsiteFinderRoutes"));

var _campgroundRoutes = _interopRequireDefault(require("./routes/campgroundRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// API routes for CRUD campsite finders
// API route for search campgrounds
(0, _dotenv.config)();
var app = (0, _express.default)();
var mongoUrl = process.env.MONGODB_URI;
app.set('port', process.env.PORT || 8080);
app.set('secretKey', 'campingReserver');
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)()); // use native promises with MongoDB

_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(mongoUrl, {
  useMongoClient: true
});

(0, _campsiteFinderRoutes.default)(app);
(0, _campgroundRoutes.default)(app);
app.listen(app.get('port'), function () {
  console.log('app listening on port', app.get('port'));
}); // resetCampsiteFinders();
// seedAllCampgrounds();

(0, _campsiteScraper.default)();