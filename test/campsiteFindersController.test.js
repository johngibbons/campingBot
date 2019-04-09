/* eslint-env mocha */
import request from 'supertest';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import app from '../src/app';
import User from '../src/models/user';
import Campground from '../src/models/campground';
import CampsiteFinder, {
  CAMPSITE_FINDER_TYPES
} from '../src/models/campsite-finder';

describe('POST /campsite-finders', () => {
  async function createUserWithToken() {
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };
    const user = await User.create(validUser);
    const token = jwt.sign({ id: user._id }, app.get('secretKey'), {
      expiresIn: '1h'
    });

    return { user, token };
  }

  before(() => {
    process.env.TEST_SUITE = 'campsite-finders-controller';
  });

  it('it should create a campsite finder belonging to the authenticated user', async () => {
    const { user, token } = await createUserWithToken();
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

  it('it should not create a campsite finder and return error if no auth token provided', async () => {
    const campground = await Campground.create({});
    const campsiteFinderObj = {
      finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
      campgrounds: [campground._id],
      startDate: Date.now(),
      endDate: Date.now()
    };

    const response = await request(app)
      .post('/campsite-finders')
      .send(campsiteFinderObj);

    expect(response.body).toEqual({
      auth: false,
      message: 'No token provided.'
    });
    expect(response.status).toEqual(401);
    expect(await CampsiteFinder.findOne({})).toBeNull();
  });

  it('it should not create a campsite finder and return error if user not authenticated', async () => {
    const campground = await Campground.create({});
    const campsiteFinderObj = {
      finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
      campgrounds: [campground._id],
      startDate: Date.now(),
      endDate: Date.now()
    };

    const response = await request(app)
      .post('/campsite-finders')
      .set('x-access-token', 'wrongtoken')
      .send(campsiteFinderObj);

    expect(response.body).toEqual({
      auth: false,
      message: 'Failed to authenticate token.'
    });
    expect(response.status).toEqual(403);
  });
});
