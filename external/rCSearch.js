const request = require('request-promise-native')
const tough = require('tough-cookie')
const Cookie = tough.Cookie
const CookieJar = tough.CookieJar
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const GA = 'GA1.2.1739813149.1505712072'
const GID = 'GA1.2.1397692867.1505853758'

module.exports = ({
  placeId,
  facilityId
}) => {
  const headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36'
  }

  const jar = rp.jar();
  const currRequest = request.defaults({
    jar,
    headers,
    followRedirect: false,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true,
  });
  this.placeId = placeId;
  this.facilityId = facilityId;
}

const getOptions = {
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx',
  method: 'GET'
}

const postOptions = {
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/' +
    'CascadingDropdown.asmx/GoCamping',
  method: 'POST',
  body: {
    currentdate: '09/29/2017',
    nights: 2,
    landingaddress: 'Manresa SB',
    hdnLat: 38.553222656247755,
    hdnLag: -122.52571868896518
  },
  json: true
}

const mapPostOptions = {
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/' +
    'AdvanceSearch.aspx/GetGoogleMapPlaceData',
  method: 'POST',
  body: {
    googlePlaceSearchParameters: {
      Latitude: '38.553222656247755',
      Longitude: '-122.52571868896518',
      South: 38.37284123021331,
      North: 38.73315263665856,
      East: -122.25277709961154,
      West: -122.79866027832252,
      Filter: true,
      BackToHome: '',
      CenterLatitude: 38.553222656247755,
      CenterLongitude: -122.52571868896518,
      ChangeDragandZoom: true,
      BacktoFacility: true,
      ChooseActivity: null,
      IsFilterClick: false,
      AvailabilitySearchParams: {
        RegionId: 0,
        PlaceId: [
          '0'
        ],
        FacilityId: 0,
        StartDate: '09/29/2017',
        Nights: '2',
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
        Autocomplitename: 'Manresa SB',
        ParkFinder: [],
        ParkCategory: 8,
        ChooseActivity: '1',
        IsPremium: false
      },
      IsFacilityLevel: false,
      PlaceIdFacilityLevel: 0,
      MapboxPlaceid: 0
    }
  },
  json: true
}

const setSession = () => {
  const options = {
    url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx',
    method: 'POST',
    body: {
      'ctl01$AdvanceMainSearch$hdnArrivalDate': '11/28/2017',
      'ctl01$AdvanceMainSearch$txtArrivalDate': '11/28/2017',
      'ctl01$AdvanceMainSearch$hdnNights': 1,
      'ctl01$AdvanceMainSearch$ddlNights': 1,
      'ctl01$mainContent$hdnUnitTotalDay': 6,
      'ctl01$mainContent$btngetFacilitiess': 'Hure',
      'ctl01$mainContent$hdnCheckListDatalistmode': 1,
      'ctl01$mainContent$Hidscreenresolution': 1280,
      'ctl01$mainContent$hdnPlaceid': this.placeId,
      'ctl01$mainContent$hdnPlaceFacilirySize': 'Medium',
      'ctl01$mainContent$hdnFacilityid': this.facilityId,
      'ctl01$mainContent$hdnFacilityType': 1,
      'ctl01$mainContent$hdnNodeclick': 0,
      'ctl01$mainContent$hiddenPlaceLevel': 'Facility',
      'ctl01$mainContent$txtDateRange': '11/28/2017',
      'ctl01$mainContent$Grid_ddlNights': 1,
      'ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory': 1,
      'ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate': '11/28/2017',
      'ctl01$mainContent$TopMenuMainSearch$ddlTopNights': 1,
      'ctl01$mainContent$TopMenuMainSearch$ddlSortBy': 3
    }
  }

  return request(options);
};

return currRequest(getOptions)
  .then(response => {
    const { document } = (new JSDOM(response.body)).window
    console.log(document)
    console.log(document.location)
    return currRequest(mapPostOptions)
  })
  .then(response => {
    console.log(response.body.d.ListJsonPlaceInfos[0])
    if (!response) return 0
  })
  .catch((err) => {
    console.log(err)
  })
}