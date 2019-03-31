import Campground from '../models/campground';

export default async () => {
  await Campground.remove({});
  console.log('successfully deleted campgrounds');
};
