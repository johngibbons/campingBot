/* eslint-env mocha */
import request from 'supertest';
import expect from 'expect';
import app from '../src/app';
import Campground from '../src/models/campground';
import { stringifyDates } from './utils';

describe('campgrounds controller', () => {
  before(() => {
    process.env.TEST_SUITE = 'campgrounds-controller';
  });

  describe('GET /campgrounds', () => {
    it('it should return the matching campgrounds', async () => {
      const searchString = 'test';
      const matchingCampground = await Campground.create({
        placeName: `Some text and ${searchString.toUpperCase()} and other text`
      });
      await Campground.create({
        placeName: 'Non matching'
      });

      const response = await request(app).get(`/campgrounds?q=${searchString}`);

      expect(response.body[0]).toMatchObject(
        stringifyDates(matchingCampground)
      );
      expect(response.body.length).toEqual(1);
      expect(response.status).toEqual(200);
      const allCampgrounds = await Campground.find({});
      expect(allCampgrounds.length).toEqual(2);
    });

    it('it should return an empty array if no campgrounds match', async () => {
      const searchString = 'test';
      await Campground.create({
        placeName: 'Non matching'
      });

      const response = await request(app).get(`/campgrounds?q=${searchString}`);

      expect(response.body).toEqual([]);
      expect(response.status).toEqual(200);
      const allCampgrounds = await Campground.find({});
      expect(allCampgrounds.length).toEqual(1);
    });
  });
});
