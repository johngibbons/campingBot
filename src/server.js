import app from './app';
import campsiteScraper from './jobs/campsiteScraper';
import seedAllCampgrounds from './data/seedAllCampgrounds';
import resetCampsiteFinder from './data/resetCampsiteFinders';

app.listen(app.get('port'), () => {
  console.log('app listening on port', app.get('port'));
});

// resetCampsiteFinders();
// seedAllCampgrounds();
campsiteScraper();
