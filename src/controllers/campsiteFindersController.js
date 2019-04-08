import jwt from 'jsonwebtoken';
import CampsiteFinder from '../models/campsite-finder';

export const listAllCampsiteFinders = (req, res) => {
  CampsiteFinder.find({})
    .populate('campgroundId')
    .then(campsiteFinders => res.json(campsiteFinders))
    .catch(err => res.send(err));
};

export const createCampsiteFinder = async (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: 'No token provided.' });
    }

    let body;
    try {
      const decodedToken = await jwt.verify(token, req.app.get('secretKey'));
      console.log('token is', decodedToken);
      body = { ...req.body, user: decodedToken.id };
    } catch (err) {
      console.log('err is', err);
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    }
    const campsiteFinder = await new CampsiteFinder(body).save();
    return res.json(campsiteFinder);
  } catch (err) {
    return res.send(err);
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
