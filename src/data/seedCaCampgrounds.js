const Campground = require('../models/campground');
const request = require('request-promise-native');
const { Maybe } = require('monet');
const { RESERVE_CA, URL_RESERVE_CA, USER_AGENT } = require('../constants');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const getSession = req => req({ url: URL_RESERVE_CA });

let allCampgrounds = [];

const requester = placeId => {
  const jar = request.jar();
  const headers = {
    'user-agent': USER_AGENT,
    'content-type': 'application/json'
  };
  const req = request.defaults({
    jar,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true,
    headers
  });
  const url = `${URL_RESERVE_CA}/GetGoogleMapPlaceData`;

  const body = {
    googlePlaceSearchParameters: {
      Latitude: '39.6481399536133',
      Longitude: '-123.617057800293',
      Filter: true,
      BackToHome: '',
      ChangeDragandZoom: false,
      BacktoFacility: true,
      ChooseActivity: null,
      IsFilterClick: false,
      AvailabilitySearchParams: {
        RegionId: 0,
        PlaceId: ['0'],
        FacilityId: 0,
        StartDate: '11/15/2017',
        Nights: '1',
        CategoryId: '0',
        UnitTypeIds: [],
        ShowOnlyAdaUnits: false,
        ShowOnlyTentSiteUnits: 'false',
        ShowOnlyRvSiteUnits: 'false',
        MinimumVehicleLength: '0',
        PageIndex: 0,
        PageSize: 20,
        Page1: 20,
        NoOfRecords: 100,
        ShowSiteUnitsName: '0',
        ParkFinder: [],
        ParkCategory: 8,
        ChooseActivity: '1',
        IsPremium: false
      },
      IsFacilityLevel: false,
      PlaceIdFacilityLevel: 0,
      MapboxPlaceid: placeId
    }
  };

  const options = {
    url,
    headers,
    body
  };

  return getSession(req)
    .then(() => req.post(options))
    .catch(reason => console.log('post failed for reason:', reason));
};

function parseFacilities(place) {
  console.log('place is:', place);
  const {
    DisplayName,
    PlaceinfoUrl,
    Fulldescription,
    JsonFacilityInfos,
    ImageUrl
  } = place;

  return JsonFacilityInfos.map(
    ({
      PlaceId,
      FacilityId,
      FacilityName,
      FacilityCategory,
      FacilityBoundryLatitude,
      FacilityBoundryLongitude
    }) => ({
      reservationAgency: RESERVE_CA,
      placeId: PlaceId,
      placeName: DisplayName,
      placeUrl: PlaceinfoUrl,
      placeDescription: Fulldescription,
      placePhoto: ImageUrl,
      facilityPhoto: ImageUrl,
      facilityName: FacilityName,
      facilityId: FacilityId,
      facilityCategory: FacilityCategory,
      latitude: FacilityBoundryLatitude,
      longitude: FacilityBoundryLongitude
    })
  );
}

const handleResponse = response => {
  return Maybe.fromNull(response)
    .flatMap(maybeResponse =>
      Maybe.fromNull(maybeResponse.body.d.ListJsonPlaceInfos)
    )
    .flatMap(placeInfos => {
      return Maybe.fromNull(placeInfos[0]);
    })
    .map(parseFacilities)
    .orSome([]);
};

const saveFacility = placeId => {
  return requester(placeId);
};

const insertMany = arr => {
  console.log('INSERT_MANY_ARR', arr);
  if (arr.length) {
    allCampgrounds = [...allCampgrounds, ...arr];
    Campground.insertMany(arr);
  }
};

const saveCaCampgrounds = async () => {
  let fileExists;
  let data;

  try {
    data = await readFile('caCampgrounds.json', 'utf8');
  } catch {
    console.log('no caCampgrounds, need to scrape');
  }

  if (data) {
    // json file exists, just write it to db
    const parsed = JSON.parse(data);
    await insertMany(parsed);
  } else {
    // need to scrape data
    for (let i = 0; i < 1200; i += 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const response = await saveFacility(i);
      const result = handleResponse(response);
      await insertMany(result);
    }
    const allCampgroundsJson = JSON.stringify(allCampgrounds);
    await writeFile('caCampgrounds.json', allCampgroundsJson, 'utf8');
  }
};

module.exports = saveCaCampgrounds;
