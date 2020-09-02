const querystring = require('querystring');
const spotifyAccountApi = require('../services/spotifyAccountApi');

class SpotifyTokenController {
    async store(req, res) {

      const {redirect_uri, code} = req.body;

      const body = {
        grant_type: 'authorization_code',
        client_id: process.env.SPOTIFY_APP_ID,
        client_secret: process.env.SPOTIFY_APP_SECRET,
        redirect_uri,
        code,
      };

      try {
          const response = await spotifyAccountApi.post(
              '/api/token',
              querystring.stringify(body),
              {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
          );

          return res.json(response.data);
      } catch (err) {
          throw new AppError('Não autorizado');
      }
    }
}

module.exports =  new SpotifyTokenController();