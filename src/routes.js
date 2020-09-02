const {Router} = require('express');

const SearchTrackLyricController = require('./controllers/SearchTrackLyricController');
const SearchCurrentTrackController = require('./controllers/SearchCurrentTrackController');
const SpotifyTokenController = require('./controllers/SpotifyTokenController');

const routes = Router();

routes.get('/searchLyrics', SearchTrackLyricController.show);
routes.get('/current/track', SearchCurrentTrackController.show);
routes.post('/token/exchange', SpotifyTokenController.show);

module.exports = routes;