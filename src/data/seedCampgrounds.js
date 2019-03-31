import fs from 'fs';
import util from 'util';
import xml2js from 'xml2js';
import path from 'path';
import { curry, reduce, assoc, keys, pipe } from 'ramda';
import Campground from '../models/campground';
import { RESERVE_AMERICA } from '../constants';

const readFile = util.promisify(fs.readFile);
const parser = util.promisify(new xml2js.Parser().parseString);

const renameKeys = curry((keysMap, obj) =>
  reduce(
    (acc, key) =>
      assoc(
        keysMap[key] || key,
        keysMap[key] === 'facilityPhoto'
          ? `http://reserveamerica.com${obj[key]}`
          : obj[key],
        acc
      ),
    {},
    keys(obj)
  )
);

const keysMap = {
  facilityName: 'placeName',
  facilityID: 'facilityId',
  faciltyPhoto: 'facilityPhoto',
  contractID: 'contractCode'
};

const addAgency = obj =>
  Object.assign({}, obj, { reservationAgency: RESERVE_AMERICA });
const mapToDb = r =>
  pipe(
    renameKeys(keysMap),
    addAgency
  )(r.$);

// seed campgrounds from xml file
const seedCampgrounds = async () => {
  const data = await readFile(path.resolve('data/allCampgrounds.xml'), 'utf8');
  const parseString = await parser(data);
  const dataForDb = parseString.resultset.result.map(mapToDb);
  await Campground.insertMany(dataForDb);
};

export default seedCampgrounds;
