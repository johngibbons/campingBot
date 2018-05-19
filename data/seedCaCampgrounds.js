const Campground = require("../models/campground");
const request = require("request-promise-native");
const { Maybe } = require("monet");
const { from } = require("rxjs/observable/from");
const { timer } = require("rxjs/observable/timer");
const { take, map, flatMap, tap, finalize } = require("rxjs/operators");
const {
  RESERVE_CA,
  RESERVE_AMERICA,
  URL_RESERVE_CA,
  USER_AGENT
} = require("../constants");

const getSession = req => req({ url: URL_RESERVE_CA });

const requester = placeId => {
  const jar = request.jar();
  const headers = {
    "user-agent": USER_AGENT,
    "content-type": "application/json"
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
      Latitude: "39.6481399536133",
      Longitude: "-123.617057800293",
      Filter: true,
      BackToHome: "",
      ChangeDragandZoom: false,
      BacktoFacility: true,
      ChooseActivity: null,
      IsFilterClick: false,
      AvailabilitySearchParams: {
        RegionId: 0,
        PlaceId: ["0"],
        FacilityId: 0,
        StartDate: "11/15/2017",
        Nights: "1",
        CategoryId: "0",
        UnitTypeIds: [],
        ShowOnlyAdaUnits: false,
        ShowOnlyTentSiteUnits: "false",
        ShowOnlyRvSiteUnits: "false",
        MinimumVehicleLength: "0",
        PageIndex: 0,
        PageSize: 20,
        Page1: 20,
        NoOfRecords: 100,
        ShowSiteUnitsName: "0",
        ParkFinder: [],
        ParkCategory: 8,
        ChooseActivity: "1",
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
    .catch(reason => console.log("post failed for reason:", reason));
};

function parseFacilities(place) {
  const {
    DisplayName,
    PlaceinfoUrl,
    Fulldescription,
    JsonFacilityInfos,
    ImageUrl
  } = place;

  return JsonFacilityInfos.map(
    ({
      FacilityImage,
      FacilityName,
      PlaceId,
      FacilityId,
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
      facilityName: DisplayName,
      facilityId: FacilityId,
      facilityCategory: FacilityCategory,
      latitude: FacilityBoundryLatitude,
      longitude: FacilityBoundryLongitude
    })
  );
}

const handleResponse = response => {
  return Maybe.fromNull(response)
    .flatMap(response => Maybe.fromNull(response.body.d.ListJsonPlaceInfos))
    .flatMap(placeInfos => {
      console.log("placeInfos", placeInfos);
      return Maybe.fromNull(placeInfos[0]);
    })
    .map(parseFacilities)
    .map(x => {
      console.log("val is", x);
      return x;
    })
    .orSome([]);
};

const saveFacility$ = placeId => {
  return from(requester(placeId));
};

const insertMany = arr => {
  console.log("arr", arr);
  return from(Campground.insertMany(arr));
};

const saveCaCampgrounds$ = timer(0, 10).pipe(
  take(1200),
  tap(val => console.log("Getting place id:", val)),
  flatMap(saveFacility$),
  map(handleResponse),
  tap(result => console.log("getting here 2", result)),
  flatMap(insertMany),
  tap(val => console.log("Inserted:", val)),
  finalize(() => {
    Campground.count({ reservationAgency: RESERVE_CA })
      .then(count =>
        console.log(`done seeding ${count} California campgrounds`)
      )
      .then(() => Campground.count({ reservationAgency: RESERVE_AMERICA }))
      .then(count => console.log(`done seeding ${count} American campgrounds`))
      .then(() => Campground.count({}))
      .then(count => console.log(`done seeding ${count} total campgrounds`));
  })
);

module.exports = saveCaCampgrounds$;
