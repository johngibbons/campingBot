import mongoose from 'mongoose';

const CampsiteFinder = mongoose.model('CampsiteFinders');

export const listAllCampsiteFinders = (req, res) => {
  CampsiteFinder.find({})
    .populate('campgroundId')
    .then(campsiteFinders => res.json(campsiteFinders))
    .catch(err => res.send(err));
};

export const createCampsiteFinder = async (req, res) => {
  try {
    const campsiteFinder = await new CampsiteFinder(req.body).save();
    res.json(campsiteFinder);
  } catch (err) {
    res.send(err);
  }
};

export const updateCampsiteFinder = async (req, res) => {
  if (req.body.emailAddresses) {
    req.body.emailAddresses = JSON.parse(req.body.emailAddresses);
  }

  try {
    const campsiteFinder = await CampsiteFinder.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true
      }
    );

    res.json(campsiteFinder);
  } catch (err) {
    res.send(err);
  }
};

export const deleteCampsiteFinder = async (req, res) => {
  try {
    await CampsiteFinder.remove({ _id: req.params.id });

    res.json({ message: 'successfully deleted' });
  } catch (err) {
    res.send(err);
  }
};
