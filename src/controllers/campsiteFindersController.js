import CampsiteFinder from '../models/campsite-finder';

export const listAllCampsiteFinders = (req, res) => {
  CampsiteFinder.find({ user: req.userId })
    .populate('campgrounds')
    .then(campsiteFinders => res.json(campsiteFinders))
    .catch(err => res.send(err));
};

export const createCampsiteFinder = async (req, res) => {
  try {
    const body = { ...req.body, user: req.userId };
    await CampsiteFinder.init();
    const campsiteFinder = await CampsiteFinder.create(body);
    return res.status(201).json(campsiteFinder);
  } catch (err) {
    return res
      .status(500)
      .send({ auth: false, message: 'Internal server error.' });
  }
};

export const updateCampsiteFinder = async (req, res) => {
  if (req.body.emailAddresses) {
    req.body.emailAddresses = JSON.parse(req.body.emailAddresses);
  }

  try {
    const campsiteFinder = await CampsiteFinder.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      {
        new: true
      }
    );

    if (!campsiteFinder) {
      res.status(403).send({ error: 'Not authorized' });
      return;
    }

    res.json(campsiteFinder);
  } catch (err) {
    res.send(err);
  }
};

export const deleteCampsiteFinder = async (req, res) => {
  try {
    const { deletedCount } = await CampsiteFinder.deleteOne({
      _id: req.params.id,
      user: req.userId
    });

    if (deletedCount !== 1) {
      res.status(403).send({ error: 'Not authorized' });
      return;
    }

    res.json({ message: 'successfully deleted' });
  } catch (err) {
    res.send(err);
  }
};
