const Campground = require('../models/campground')
const request = require('request-promise-native')
const { Maybe } = require('monet')
const { Observable } = require('rxjs')
const {
  RESERVE_CA,
  RESERVE_AMERICA,
  URL_RESERVE_CA,
  USER_AGENT
} = require('../constants')

const getSession = req => req({ url: URL_RESERVE_CA })

const requester = placeId => {
  const jar = request.jar()
  const headers = {
    'user-agent': USER_AGENT,
    'content-type': 'application/json'
  }
  const req = request.defaults({
    jar,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true,
    headers
  })
  const url = `${URL_RESERVE_CA}/GetGoogleMapPlaceData`

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
  }

  const options = {
    url,
    headers,
    body
  }

  return getSession(req).then(() => req.post(options))
}

function parseFacilities (place) {
  const {
    DisplayName,
    PlaceinfoUrl,
    Fulldescription,
    JsonFacilityInfos,
    ImageUrl
  } = place

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
      facilityPhoto: FacilityImage,
      facilityName: FacilityName,
      facilityId: FacilityId,
      facilityCategory: FacilityCategory,
      latitude: FacilityBoundryLatitude,
      longitude: FacilityBoundryLongitude
    })
  )
}

const handleResponse = response =>
  Maybe.fromNull(response)
    .flatMap(response => Maybe.fromNull(response.body.d.ListJsonPlaceInfos[0]))
    .map(parseFacilities)
    .orSome([])

const saveFacility$ = placeId => Observable.fromPromise(requester(placeId))
const insertMany = arr => Observable.fromPromise(Campground.insertMany(arr))

const saveCaCampgrounds$ = Observable.timer(0, 10)
  .take(1200)
  .do(val => console.log('Getting place id:', val))
  .flatMap(saveFacility$)
  .map(handleResponse)
  .flatMap(insertMany)
  .do(val => console.log('Inserted:', val))
  .finally(() => {
    Campground.count({ reservationAgency: RESERVE_CA })
      .then(count =>
        console.log(`done seeding ${count} California campgrounds`)
      )
      .then(() => Campground.count({ reservationAgency: RESERVE_AMERICA }))
      .then(count => console.log(`done seeding ${count} American campgrounds`))
      .then(() => Campground.count({}))
      .then(count => console.log(`done seeding ${count} total campgrounds`))
  })

module.exports = saveCaCampgrounds$
