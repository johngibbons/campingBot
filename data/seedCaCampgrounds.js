const request = require('request-promise-native');
const Campground = require('../models/campground');
const { Maybe } = require('monet');
const { Observable } = require('rxjs');

function getSession(req) {
  const options = {
    url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx',
  };

  return req(options);
}

function requester(placeId) {
  const jar = request.jar();
  const headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36',
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
  const url = 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetGoogleMapPlaceData';

  const body = {
    googlePlaceSearchParameters: {
      "Latitude": "39.6481399536133",
      "Longitude": "-123.617057800293",
      "Filter": true,
      "BackToHome": "",
      "ChangeDragandZoom": false,
      "BacktoFacility": true,
      "ChooseActivity": null,
      "IsFilterClick": false,
      "AvailabilitySearchParams":
        {
          "RegionId": 0,
          "PlaceId": ["0"],
          "FacilityId": 0,
          "StartDate": "11/15/2017",
          "Nights": "1",
          "CategoryId": "0",
          "UnitTypeIds": [],
          "ShowOnlyAdaUnits": false,
          "ShowOnlyTentSiteUnits": "false",
          "ShowOnlyRvSiteUnits": "false",
          "MinimumVehicleLength": "0",
          "PageIndex": 0,
          "PageSize": 20,
          "Page1": 20,
          "NoOfRecords": 100,
          "ShowSiteUnitsName": "0",
          "ParkFinder": [],
          "ParkCategory": 8,
          "ChooseActivity": "1",
          "IsPremium": false
        },
        "IsFacilityLevel": false,
        "PlaceIdFacilityLevel": 0,
        "MapboxPlaceid": placeId
    }
  }

  const options = {
    url,
    headers,
    body
  }

  return getSession(req).then(() => req.post(options));
}

function parseFacilities(place) {
  const {
    DisplayName,
    PlaceinfoUrl,
    Fulldescription,
    JsonFacilityInfos,
    ImageUrl
  } = place;

  return JsonFacilityInfos.map(({
    FacilityImage,
    FacilityName,
    PlaceId,
    FacilityId,
    FacilityCategory,
    FacilityBoundryLatitude,
    FacilityBoundryLongitude
  }) => ({
      placeId: PlaceId,
      placeName: DisplayName,
      placeUrl: PlaceinfoUrl,
      placeDescription: Fulldescription,
      placePhoto: ImageUrl,
      facilityPhoto: FacilityImage,
      facilityName: FacilityName,
      facilityId: FacilityId,
      facilityCategory: FacilityCategory,
      latitude: FacilityBoundryLatitude,
      longitude: FacilityBoundryLongitude
  }))
}

const handleInsert = response =>
  response.then(console.log)

const handleResponse = response =>
  Maybe
    .fromNull(response)
    .map(response => response.body.d.ListJsonPlaceInfos[0])
    .map(parseFacilities)
    .map(Campground.insertMany)
    .map(handleInsert)

const saveFacility = (placeId) =>
  requester(placeId)
    .then(handleResponse)
    .catch(err => console.log(err));

const result = () =>
  Observable.timer(0, 1000)
    .map(saveFacility)
    .subscribe()

module.exports = result;