import CampsiteFinder from '../models/campsite-finder';

export default async () => {
  await CampsiteFinder.remove({});
  console.log('successfully deleted finders');
};
