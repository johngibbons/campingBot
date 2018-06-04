const seedAmericaCampgrounds = require("./seedCampgrounds");
const seedCaCampgrounds = require("./seedCaCampgrounds");
const resetCampgrounds = require("./resetCampgrounds");

module.exports = async () => {
  await resetCampgrounds();
  await seedAmericaCampgrounds();
  await seedCaCampgrounds();
  console.log("finished ALL seeding");
};
