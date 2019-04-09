/* eslint-env mocha */
import mongoose from 'mongoose';

// Load models since we will not be instantiating our express server.
beforeEach(async () => {
  /*
    Define clearDB function that will loop through all 
    the collections in our mongoose connection and drop them.
  */
  async function clearDB() {
    await mongoose.connection.dropDatabase();
    mongoose.models = {};
  }

  /*
    If the mongoose connection is closed, 
    start it up using the test url and database name
    provided by the node runtime ENV
  */
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    );
    console.log(
      'connected to',
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`
    );
    await clearDB();
  } else {
    await clearDB();
  }
});

afterEach(async () => {
  await mongoose.disconnect();
});
