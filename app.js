require("dotenv").config();
require("newrelic");
const express = require("express");
const app = express();
const url = process.env.MONGODB_URI;
const bodyParser = require("body-parser");
const campsiteScraper = require("./jobs/campsiteScraper");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = require("./external/caSearch");
const seedAmericaCampgrounds$ = require("./data/seedCampgrounds");
const seedCaCampgrounds$ = require("./data/seedCaCampgrounds");
const resetCampgrounds$ = require("./data/resetCampgrounds");
const Campground = require("./models/campground");

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use native promises with MongoDB
mongoose.Promise = global.Promise;

mongoose.connect(url, { useMongoClient: true });

// API routes for CRUD campsite finders
const campsiteFinderRoutes = require("./routes/campsiteFinderRoutes");

// API route for search campgrounds
const campgroundRoutes = require("./routes/campgroundRoutes");

app.listen(app.get("port"), function() {
  console.log("app listening on port", app.get("port"));
});

/*
resetCampgrounds$
  .concat(seedAmericaCampgrounds$)
  .concat(seedCaCampgrounds$)
  .finally("finished ALL seeding")
  .subscribe(
    () => {},
    err => console.log(err),
    () => {
      console.log("total campgrounds:", Campground.count({}).then(console.log));
    }
  );
*/
