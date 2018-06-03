const moment = require("moment");
const { Observable } = require("rx");
const getUrl = require("../external/getUrl");
const postSearch = require("../external/postSearch");
const parse = require("./reserveAmericaParser");
const sendEmails = require("../mailers/mailer");
const updateFinderResults = require("./updateFinderResults");

module.exports = reserveAmericaCampsiteFinders$ => {
  const setUrl$ = campsiteFinder =>
    Observable.fromPromise(getUrl(campsiteFinder));

  const groupResult$ = group => {
    return group.reduce(
      (
        acc,
        [
          {
            _id,
            campingDate,
            emailAddresses,
            isSendingEmails,
            lengthOfStay,
            campgroundId: { facilityName, url }
          },
          result
        ]
      ) => {
        const resultObj = {
          siteCount: result,
          date: campingDate,
          lengthOfStay
        };
        const results =
          result > 0
            ? acc.results
              ? [...acc.results, resultObj]
              : [resultObj]
            : acc.results
              ? acc.results
              : [];
        return Object.assign({}, acc, {
          _id,
          campground: facilityName,
          emailAddresses,
          isSendingEmails,
          lengthOfStay,
          url,
          results
        });
      },
      {}
    );
  };

  const groupByEmail = result =>
    result.reduce((acc, curr) => {
      if (
        !curr.isSendingEmails ||
        !curr.datesAvailable ||
        curr.datesAvailable.length === 0
      ) {
        return acc;
      }
      const emailAddresses = curr.emailAddresses;
      emailAddresses.forEach(e => {
        if (acc[e]) {
          acc[e].push(curr);
        } else {
          acc[e] = [curr];
        }
      });
      return acc;
    }, {});

  const searchResults$ = reserveAmericaCampsiteFinders$
    .concatMap(setUrl$)
    .map(value => Observable.just(value).delay(1000))
    .concatAll()
    .concatMap(campsiteFinderObj => {
      return Observable.fromPromise(postSearch(campsiteFinderObj))
        .map(parse)
        .map(result => [campsiteFinderObj, result]);
    })
    .groupBy(([campsiteFinderObj, result]) => campsiteFinderObj._id)
    .mergeMap(groupResult$)
    .reduce((acc, curr) => [...acc, curr], [])
    .tap(val => console.log(val[0].results))
    .repeat();

  searchResults$.subscribe(
    result => {
      updateFinderResults(result);
      sendEmails(groupByEmail(result));
      console.log(
        "Sequence ended at:",
        moment().format("MMMM Do YYYY, h:mm:ss a")
      );
      console.timeEnd("test");
    },
    console.log,
    () => {
      console.log("ended somehow");
    }
  );
};
