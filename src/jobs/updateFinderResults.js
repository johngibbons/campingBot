import moment from 'moment';
import CampsiteFinder from '../models/campsite-finder';

export default (_id, datesAvailable = []) =>
  CampsiteFinder.findOneAndUpdate(
    { _id },
    {
      datesAvailable,
      lastCheckedAt: moment()
    }
  ).catch(err => console.log(err));
