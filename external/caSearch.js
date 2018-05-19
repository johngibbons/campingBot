const rp = require("request-promise-native");

const headers = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36"
};

const jar = rp.jar();
const request = rp.defaults({
  jar,
  headers,
  simple: false,
  followRedirect: false,
  resolveWithFullResponse: true,
  time: true,
  timeout: 3000,
  forever: true,
  json: true
});

const sessionOptions = {
  url: "https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx"
};

const searchOptions = {
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx",
  method: "POST",
  body: {
    ctl01$AdvanceMainSearch$hdnArrivalDate: "03/14/2018",
    ctl01$AdvanceMainSearch$txtArrivalDate: "03/14/2018",
    ctl01$AdvanceMainSearch$hdnNights: 1,
    ctl01$AdvanceMainSearch$ddlNights: 1,
    ctl01$mainContent$hdnUnitTotalDay: 6,
    ctl01$mainContent$btngetFacilitiess: "Hure",
    ctl01$mainContent$hdnCheckListDatalistmode: 1,
    ctl01$mainContent$Hidscreenresolution: 1280,
    ctl01$mainContent$hdnPlaceid: "3",
    ctl01$mainContent$hdnPlaceFacilirySize: "Medium",
    ctl01$mainContent$hdnFacilityid: 336,
    ctl01$mainContent$hdnFacilityType: 1,
    ctl01$mainContent$hdnNodeclick: 0,
    ctl01$mainContent$hiddenPlaceLevel: "Facility",
    ctl01$mainContent$txtDateRange: "11/28/2017",
    ctl01$mainContent$Grid_ddlNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory: 1,
    ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate: "03/14/2018",
    ctl01$mainContent$TopMenuMainSearch$ddlTopNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlSortBy: 3
  }
};

const gridOptions = {
  headers: {
    "content-type": "application/json"
  },
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetUnitGridDataHtmlString",
  method: "POST",
  body: {
    FacilityId: "336",
    PlaceId: "3",
    MaximumDates: "20",
    IsTablet: true,
    MaximumStayforGrid: 30
  }
};

const nextDateOptions = {
  headers: {
    "content-type": "application/json"
  },
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetNextDateUnitGrid",
  method: "POST",
  body: {
    unitsizebool: true,
    unitclicsizechangevalue: true
  }
};

// UnitDetailPopup.aspx?facility_id=346
// \u0026amp;unit_id=4528
// \u0026amp;arrival_date=8/29/2017 12:00:00 AM
// \u0026amp;dis=8/29/2017 12:00:00 AM
// \u0026amp;is_available=true
// \u0026#39;,
// \u0026#39;4528
// \u0026#39;,
// \u0026#39;8/29/2017
// \u0026#39;,
// \u0026#39;0
// \u0026#39;,
// \u0026#39;0
// \u0026#39;
// );\"

const search = async function() {
  try {
    await request(sessionOptions);
    await request(searchOptions);
    await request(nextDateOptions);
    const gridResponse = await request(gridOptions);
    return gridResponse.body.d || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = search;
