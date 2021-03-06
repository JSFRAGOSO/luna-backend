const spotifyApi = require('../services/spotifyApi');

class SearchCurrentTrackController {
    async show(req, res) {
      const {token} = req.query;
      spotifyApi.defaults.headers.authorization = `Bearer ${token}`;

      const response = await spotifyApi.get(`/v1/me/player/currently-playing?market=BR`);
      
      const formattedResponse = Object.assign(
        {
          artist: response.data.item.album.artists[0].name,
          track: response.data.item.name,
          track_id: response.data.item.id,
          thumbnail_url: response.data.item.album.images[0].url,
          progress_ms: response.data.progress_ms
        },
      )


      return res.json(formattedResponse);
    }
}

module.exports =  new SearchCurrentTrackController();
