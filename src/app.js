import { config } from 'dotenv';
import 'newrelic';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authenticationRoutes from './routes/authentication';
// API routes for CRUD campsite finders
import campsiteFinderRoutes from './routes/campsiteFinderRoutes';
// API route for search campgrounds
import campgroundRoutes from './routes/campgroundRoutes';

config();

const app = express();
const mongoUrl =
  process.env.NODE_ENV === 'test'
    ? `mongodb://localhost:27017/${process.env.TEST_SUITE}`
    : process.env.MONGODB_URI;

console.log('MONGO_URL', mongoUrl);

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use native promises with MongoDB
mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true
});

authenticationRoutes(app);
campsiteFinderRoutes(app);
campgroundRoutes(app);

export default app;
