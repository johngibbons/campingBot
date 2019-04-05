import { config } from 'dotenv';
import 'newrelic';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import campsiteScraper from './jobs/campsiteScraper';
import seedAllCampgrounds from './data/seedAllCampgrounds';
import resetCampsiteFinders from './data/resetCampsiteFinders';
import authenticationRoutes from './routes/authentication';
// API routes for CRUD campsite finders
import campsiteFinderRoutes from './routes/campsiteFinderRoutes';
// API route for search campgrounds
import campgroundRoutes from './routes/campgroundRoutes';

config();

const app = express();
const mongoUrl = process.env.MONGODB_URI;

app.set('port', process.env.PORT || 8080);
app.set('secretKey', 'campingReserver');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use native promises with MongoDB
mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, { useMongoClient: true });

authenticationRoutes(app);
campsiteFinderRoutes(app);
campgroundRoutes(app);

app.listen(app.get('port'), () => {
  console.log('app listening on port', app.get('port'));
});

resetCampsiteFinders();
// seedAllCampgrounds();
campsiteScraper();
