const {Router} = require('express');

const SearchTrackLyricController = require('./controllers/SearchTrackLyricController');
const SearchCurrentTrackController = require('./controllers/SearchCurrentTrackController');
const SpotifyTokenController = require('./controllers/SpotifyTokenController');
const LyricController = require('./controllers/LyricController');

const routes = Router();

routes.get('/searchLyrics', SearchTrackLyricController.show);
routes.get('/current/track', SearchCurrentTrackController.show);

routes.post('/token/exchange', SpotifyTokenController.store);

routes.get('/lyrics/:trackId', LyricController.show);

routes.post('/lyrics', LyricController.store);

module.exports = routes;