const mongoose = require('mongoose');
const Campground = mongoose.model('Campgrounds');
const { RESERVE_AMERICA, RESERVE_CA } = require('../constants');

exports.searchCampgrounds = async (req, res) => {
  try {
    const campgrounds = await Campground.find({
      facilityName: { $regex: `${req.query.q}`, $options: 'i' }
    });

    return res.json(campgrounds);

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
  } catch (err) {
    res.send(err);
  }
};
