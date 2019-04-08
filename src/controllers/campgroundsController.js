import Campground from '../models/campground';

// eslint-disable-next-line import/prefer-default-export
export const searchCampgrounds = async (req, res) => {
  try {
    const campgrounds = await Campground.find({
      placeName: { $regex: `${req.query.q}`, $options: 'i' }
    });

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
  } catch (err) {
    res.send(err);
  }
};
