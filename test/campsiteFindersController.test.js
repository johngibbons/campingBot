/* eslint-env mocha */
import request from 'supertest';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import app from '../src/app';
import User from '../src/models/user';
import Campground from '../src/models/campground';
import { CAMPSITE_FINDER_TYPES } from '../src/models/campsite-finder';

process.env.TEST_SUITE = 'campsite-finders-controller';

describe('POST /campsite-finders', () => {
  it('it should create a campsite finder belonging to the authenticated user', async () => {
    expect.assertions(3);
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };
    const user = await User.create(validUser);
    const token = jwt.sign({ id: user._id }, app.get('secretKey'), {
      expiresIn: '1h'
    });
    const campground = await Campground.create({});
    const campsiteFinderObj = {
      finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
      campgrounds: [campground._id],
      startDate: Date.now(),
      endDate: Date.now()
    };

    const response = await request(app)
      .post('/campsite-finders')
      .set('x-access-token', token)
      .send(campsiteFinderObj);

    expect(response.body).toMatchObject({
      user: user._id.toString(),
      finderType: campsiteFinderObj.finderType
    });
    expect(response.status).toEqual(201);
  });
});
