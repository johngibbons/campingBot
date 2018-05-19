const seedAmericaCampgrounds$ = require("./seedCampgrounds");
const seedCaCampgrounds$ = require("./seedCaCampgrounds");
const resetCampgrounds$ = require("./resetCampgrounds");

module.exports = resetCampgrounds$
  .concat(seedAmericaCampgrounds$)
  .concat(seedCaCampgrounds$)
  .finally("finished ALL seeding").subscribe;
