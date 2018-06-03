const { Observable } = require("rx");
const postSearch = require("../external/caSearch");

module.exports = reserveCaCampsiteFinders$ => {
  reserveCaCampsiteFinders$
    .map(value => Observable.just(value).delay(1000))
    .concatAll()
    .concatMap(campsiteFinderObj => {
      return Observable.fromPromise(postSearch(campsiteFinderObj)).tap(result =>
        console.log("reserve ca result", result)
      );
    })
    .subscribe(() => {});
};
