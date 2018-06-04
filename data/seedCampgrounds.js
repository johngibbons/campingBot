const Campground = require("../models/campground");
const { Observable } = require("rx");
const fs = require("fs/promises");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();
const path = require("path");
const { curry, reduce, assoc, keys, pipe } = require("ramda");
const { RESERVE_AMERICA } = require("../constants");

const renameKeys = curry((keysMap, obj) =>
  reduce(
    (acc, key) =>
      assoc(
        keysMap[key] || key,
        keysMap[key] === "facilityPhoto"
          ? `http://reserveamerica.com${obj[key]}`
          : obj[key],
        acc
      ),
    {},
    keys(obj)
  )
);

const keysMap = {
  facilityID: "facilityId",
  faciltyPhoto: "facilityPhoto",
  contractID: "contractCode"
};

const mapToDb = r => pipe(renameKeys(keysMap), addAgency)(r.$);
const addAgency = obj =>
  Object.assign({}, obj, { reservationAgency: RESERVE_AMERICA });

// seed campgrounds from xml file
const seedCampgrounds = async () => {
  const data = await fs.readFile(
    path.resolve("data/allCampgrounds.xml"),
    "utf8"
  );
  const parseString = await parser.parseString(data);
  const dataForDb = parseString.resultset.result.map(mapToDb);
  await Campground.insertMany(dataForDb);
  const count = await Campground.count({ reservationAgency: RESERVE_AMERICA });
  console.log(`done seeding ${count} American campgrounds`);
};

module.exports = seedCampgrounds;
