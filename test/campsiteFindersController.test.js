/* eslint-env mocha */
import request from 'supertest';
import expect from 'expect';
import app from '../src/app';
import CampsiteFinder, {
  CAMPSITE_FINDER_TYPES
} from '../src/models/campsite-finder';
import { createUserWithToken, stringifyDates } from './utils';

const requiredCampsiteFinderAttrs = {
  finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
  campgrounds: [],
  startDate: Date.now(),
  endDate: Date.now()
};

describe('campsite finders controller', () => {
  before(() => {
    process.env.TEST_SUITE = 'campsite-finders-controller';
  });

  describe('GET /campsite-finders', () => {
    it('it should return the campsite finders belonging to the authenticated user only', async () => {
      const { user, token } = await createUserWithToken();
      const otherUser = await createUserWithToken();
      const authenticatedUserCampsiteFinder = await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        user: user._id
      });
      await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        user: otherUser.user._id
      });

      const response = await request(app)
        .get('/campsite-finders')
        .set('x-access-token', token);

      expect(response.body[0]).toMatchObject(
        stringifyDates(authenticatedUserCampsiteFinder)
      );
      expect(response.body.length).toEqual(1);
      expect(response.status).toEqual(200);
      const allCampsiteFinders = await CampsiteFinder.find({});
      expect(allCampsiteFinders.length).toEqual(2);
    });

    it('it should not fetch campsite finders and return error if no auth token provided', async () => {
      const response = await request(app).get('/campsite-finders');

      expect(response.body).toEqual({
        auth: false,
        message: 'No token provided.'
      });
      expect(response.status).toEqual(401);
    });

    it('it should not create a campsite finder and return error if user not authenticated', async () => {
      const response = await request(app)
        .get('/campsite-finders')
        .set('x-access-token', 'wrongtoken');

      expect(response.body).toEqual({
        auth: false,
        message: 'Failed to authenticate token.'
      });
      expect(response.status).toEqual(401);
      expect(await CampsiteFinder.findOne({})).toBeNull();
    });
  });

  describe('POST /campsite-finders', () => {
    it('it should create a campsite finder belonging to the authenticated user', async () => {
      const { user, token } = await createUserWithToken();
      const campsiteFinderObj = requiredCampsiteFinderAttrs;

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
      const campsiteFinderObj = requiredCampsiteFinderAttrs;

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
      const campsiteFinderObj = requiredCampsiteFinderAttrs;

      const response = await request(app)
        .post('/campsite-finders')
        .set('x-access-token', 'wrongtoken')
        .send(campsiteFinderObj);

      expect(response.body).toEqual({
        auth: false,
        message: 'Failed to authenticate token.'
      });
      expect(response.status).toEqual(401);
      expect(await CampsiteFinder.findOne({})).toBeNull();
    });
  });

  describe('PUT /campsite-finders/:id', () => {
    it('it should update the campsite finder if it belongs to the user', async () => {
      const { user, token } = await createUserWithToken();
      const authenticatedUserCampsiteFinder = await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
        user: user._id
      });

      const newType = CAMPSITE_FINDER_TYPES.GENERAL_AVAILABILITY;

      const response = await request(app)
        .put(`/campsite-finders/${authenticatedUserCampsiteFinder._id}`)
        .set('x-access-token', token)
        .send({ finderType: newType });

      expect(response.body).toMatchObject({
        user: user._id.toString(),
        finderType: newType
      });
      expect(response.status).toEqual(200);
    });

    it('it should not update the campsite finder if it does not belong to the user', async () => {
      const { token } = await createUserWithToken();
      const { user: otherUser } = await createUserWithToken();
      const otherUserCampsiteFinder = await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
        user: otherUser._id
      });

      const newType = CAMPSITE_FINDER_TYPES.GENERAL_AVAILABILITY;

      const response = await request(app)
        .put(`/campsite-finders/${otherUserCampsiteFinder._id}`)
        .set('x-access-token', token)
        .send({ finderType: newType });

      expect(response.body).toMatchObject({
        error: 'Not authorized'
      });
      expect(response.status).toEqual(403);
    });

    it('it should not update a campsite finder and return error if no auth token provided', async () => {
      const newType = CAMPSITE_FINDER_TYPES.GENERAL_AVAILABILITY;

      const response = await request(app)
        .put(`/campsite-finders/1`)
        .send({ finderType: newType });

      expect(response.body).toEqual({
        auth: false,
        message: 'No token provided.'
      });
      expect(response.status).toEqual(401);
    });

    it('it should not update a campsite finder and return error if user not authenticated', async () => {
      const newType = CAMPSITE_FINDER_TYPES.GENERAL_AVAILABILITY;

      const response = await request(app)
        .put(`/campsite-finders/1`)
        .set('x-access-token', 'badtoken')
        .send({ finderType: newType });

      expect(response.body).toEqual({
        auth: false,
        message: 'Failed to authenticate token.'
      });
      expect(response.status).toEqual(401);
    });
  });

  describe('DELETE /campsite-finders/:id', () => {
    it('it should delete the campsite finder if it belongs to the user', async () => {
      const { user, token } = await createUserWithToken();
      const authenticatedUserCampsiteFinder = await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
        user: user._id
      });

      expect(await CampsiteFinder.count({})).toEqual(1);

      const response = await request(app)
        .delete(`/campsite-finders/${authenticatedUserCampsiteFinder._id}`)
        .set('x-access-token', token);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: 'successfully deleted' });
      expect(await CampsiteFinder.count({})).toEqual(0);
    });

    it('it should not delete the campsite finder if it does not belong to the user', async () => {
      const { token } = await createUserWithToken();
      const { user: otherUser } = await createUserWithToken();
      const otherUserCampsiteFinder = await CampsiteFinder.create({
        ...requiredCampsiteFinderAttrs,
        finderType: CAMPSITE_FINDER_TYPES.SPECIFIC_TRIP,
        user: otherUser._id
      });

      const response = await request(app)
        .delete(`/campsite-finders/${otherUserCampsiteFinder._id}`)
        .set('x-access-token', token);

      expect(response.body).toMatchObject({
        error: 'Not authorized'
      });
      expect(response.status).toEqual(403);
    });

    it('it should not delete a campsite finder and return error if no auth token provided', async () => {
      const response = await request(app).delete(`/campsite-finders/1`);

      expect(response.body).toEqual({
        auth: false,
        message: 'No token provided.'
      });
      expect(response.status).toEqual(401);
    });

    it('it should not delete a campsite finder and return error if user not authenticated', async () => {
      const response = await request(app)
        .delete(`/campsite-finders/1`)
        .set('x-access-token', 'badtoken');

      expect(response.body).toEqual({
        auth: false,
        message: 'Failed to authenticate token.'
      });
      expect(response.status).toEqual(401);
    });
  });
});
