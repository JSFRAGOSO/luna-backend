const {Router} = require('express');

const SearchTrackLyricController = require('./controllers/SearchTrackLyricController');
const SearchCurrentTrackController = require('./controllers/SearchCurrentTrackController');

const routes = Router();

routes.get('/searchLyrics', SearchTrackLyricController.show);
routes.get('/current/track', SearchCurrentTrackController.show);

module.exports = routes;