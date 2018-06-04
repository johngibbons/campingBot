const Campground = require("../models/campground");

module.exports = async () => {
  await Campground.remove({});
  console.log("successfully deleted campgrounds");
};
