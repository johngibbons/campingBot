require('dotenv').config();
require('newrelic');
const express = require('express');

const app = express();
const mongoUrl = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
const campsiteScraper = require('./jobs/campsiteScraper');
const cors = require('cors');
const mongoose = require('mongoose');
const seedAllCampgrounds = require('./data/seedAllCampgrounds');
const resetCampsiteFinders = require('./data/resetCampsiteFinders');
const headlessScraper = require('./jobs/reserveCaHeadlessScraper');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use native promises with MongoDB
mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, { useMongoClient: true });

// API routes for CRUD campsite finders
const campsiteFinderRoutes = require('./routes/campsiteFinderRoutes');

// API route for search campgrounds
const campgroundRoutes = require('./routes/campgroundRoutes');

campsiteFinderRoutes(app);
campgroundRoutes(app);

app.listen(app.get('port'), () => {
  console.log('app listening on port', app.get('port'));
});

// resetCampsiteFinders();
// seedAllCampgrounds();
campsiteScraper();
